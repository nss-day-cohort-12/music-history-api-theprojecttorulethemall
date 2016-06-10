using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MusicHistory.Models;

namespace MusicHistory.Migrations
{
    [DbContext(typeof(MusicHistoryContext))]
    [Migration("20160610160206_firstmigration")]
    partial class firstmigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MusicHistory.Models.Album", b =>
                {
                    b.Property<int>("AlbumId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AlbumName");

                    b.Property<string>("Author");

                    b.Property<string>("Genre");

                    b.HasKey("AlbumId");

                    b.ToTable("Album");
                });

            modelBuilder.Entity("MusicHistory.Models.Track", b =>
                {
                    b.Property<int>("TrackId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AlbumId");

                    b.Property<string>("Artist");

                    b.Property<string>("TrackName");

                    b.HasKey("TrackId");

                    b.ToTable("Track");
                });
        }
    }
}
