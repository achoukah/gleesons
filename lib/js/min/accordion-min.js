jQuery(document).ready(function(){function e(){jQuery(".accordion .accordion-section-title").removeClass("active"),jQuery(".accordion .accordion-section-content").slideUp(300).removeClass("open")}jQuery(".accordion-section-title").click(function(c){var o=jQuery(this).attr("href");jQuery(c.target).is(".active")?e():(e(),jQuery(this).addClass("active"),jQuery(".accordion "+o).slideDown(300).addClass("open")),c.preventDefault()})});