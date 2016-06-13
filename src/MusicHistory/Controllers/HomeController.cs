using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicHistory.Models;
using Microsoft.AspNetCore.Cors;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicHistory.Controllers
{  
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class HomeController : Controller
    {
        private MusicHistoryContext _context;

        public HomeController(MusicHistoryContext context)
        {
            _context = context;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get([FromQuery] string trackName)
        {
            IQueryable<Track> Tracks = from t in _context.Track                                  
                                        select t;
            
            // api/Home?trackName=$(trackName)

            if (trackName != null)
            {
                Tracks = Tracks.Where(c => c.TrackName.Contains(trackName));
            }

            return Ok(Tracks);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IQueryable<object> Track = from t in _context.Track
                                       join al in _context.Album
                                       on t.AlbumId equals al.AlbumId

                                       where t.TrackId == id
                                       select new
                                       {
                                           AlbumName = al.AlbumName,
                                           Genre = al.Genre,
                                           Author = al.Author,
                                           Artist = t.Artist,
                                           TrackTitle = t.TrackName
                                       };

            return Ok(Track);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
