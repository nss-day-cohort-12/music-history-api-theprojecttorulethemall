using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicHistory.Models
{
    public class Album
    {
        [Key]
        public int AlbumId { get; set; }
        public string AlbumName { get; set; }
        public string Genre { get; set; }
        public string Author { get; set; }
    }
}
