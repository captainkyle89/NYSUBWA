// events.js

const EVENTS = {
    // JUNE 2026
    "2026-06-03": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-06-17": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-06-13": { title: "Western New York Season Opener", location: "Buffalo, NY", time: "9:00 AM" },
    "2026-06-27": { title: "Catskills Weaving Classic", location: "Kingston, NY", time: "10:00 AM" },

    // JULY 2026
    "2026-07-01": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-07-15": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-07-12": { title: "Empire State Invitational", location: "Albany, NY", time: "9:00 AM" },
    "2026-07-25": { title: "Connecticut Coastal Cup", location: "New Haven, CT", time: "10:00 AM" },

    // AUGUST 2026
    "2026-08-05": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-08-19": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-08-08": { title: "Long Island Open", location: "Long Island, NY", time: "10:00 AM" },
    "2026-08-22": { title: "Adirondack Summer Showcase", location: "Lake George, NY", time: "9:00 AM" },

    // SEPTEMBER 2026
    "2026-09-02": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-09-16": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-09-05": { title: "Vermont Green Mountain Invitational", location: "Burlington, VT", time: "9:00 AM" },
    "2026-09-19": { title: "NYS Championship", location: "Syracuse, NY", time: "8:00 AM" },

    // OCTOBER 2026
    "2026-10-07": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-10-21": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-10-03": { title: "Keystone Cup", location: "Scranton, PA", time: "10:00 AM" },
    "2026-10-10": { title: "Hudson Valley Classic", location: "Hudson Valley, NY", time: "9:00 AM" },
    "2026-10-24": { title: "Fall Skills Clinic", location: "Buffalo, NY", time: "11:00 AM" },

    // NOVEMBER 2026
    "2026-11-04": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-11-18": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-11-07": { title: "Finger Lakes Invitational", location: "Finger Lakes, NY", time: "10:00 AM" },
    "2026-11-21": { title: "New Jersey Shore Challenge", location: "Atlantic City, NJ", time: "9:00 AM" },

    // DECEMBER 2026
    "2026-12-02": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-12-16": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2026-12-05": { title: "Annual Awards Banquet", location: "Rochester, NY", time: "6:00 PM" },
    "2026-12-19": { title: "Holiday Charity Exhibition", location: "Utica, NY", time: "1:00 PM" },

    // JANUARY 2027
    "2027-01-06": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-01-20": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-01-09": { title: "Winter Weave Workshop", location: "Binghamton, NY", time: "11:00 AM" },
    "2027-01-16": { title: "Capital Region Cup", location: "Albany, NY", time: "9:00 AM" },
    "2027-01-30": { title: "Massachusetts Bay Invitational", location: "Springfield, MA", time: "10:00 AM" },

    // FEBRUARY 2027
    "2027-02-03": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-02-17": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-02-13": { title: "Buffalo Basin International", location: "Buffalo, NY", time: "10:00 AM" },
    "2027-02-27": { title: "Pennsylvania Winter Open", location: "Erie, PA", time: "9:00 AM" },

    // MARCH 2027
    "2027-03-03": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-03-17": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-03-06": { title: "Mohawk Valley Qualifier", location: "Utica, NY", time: "9:00 AM" },
    "2027-03-20": { title: "Adirondack Challenge", location: "Lake Placid, NY", time: "9:00 AM" },

    // APRIL 2027
    "2027-04-07": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-04-21": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-04-03": { title: "Hudson River Regional", location: "Poughkeepsie, NY", time: "10:00 AM" },
    "2027-04-17": { title: "Rochester Regional", location: "Rochester, NY", time: "10:00 AM" },

    // MAY 2027
    "2027-05-05": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-05-19": { title: "NYSUBWA Team Practice", location: "Bethpage, NY", time: "7:00 PM" },
    "2027-05-01": { title: "Northeast Invitational", location: "Hartford, CT", time: "9:00 AM" },
    "2027-05-15": { title: "Southern Tier Invitational", location: "Binghamton, NY", time: "9:00 AM" },
    "2027-05-29": { title: "Memorial Day Showcase", location: "Saratoga Springs, NY", time: "10:00 AM" }
};
