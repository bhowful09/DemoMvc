using System.ComponentModel.DataAnnotations;

namespace DemoMvc.Models
{
    public class CustomerCreate
    {
        [Required]
        [StringLength(40, MinimumLength = 1)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(40, MinimumLength = 1)]
        public string LastName { get; set; }

        [Required]
        [StringLength(40, MinimumLength = 1)]
        public string City { get; set; }

        [Required]
        [StringLength(40, MinimumLength = 1)]
        public string Country { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 9)]
        public string Phone { get; set; }
    }
}