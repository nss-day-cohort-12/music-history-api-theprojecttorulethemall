using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicHistory.Models
{
    public class Track
    {
        [Key]
        public int TrackId { get; set; }
        public string Artist { get; set; }
        public int AlbumId { get; set; }
        public string TrackName { get; set; }
    }
}
