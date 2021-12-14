export class SlideBarLink {
    constructor(public name: string, public url?: string, public icon?: string) {
    }
}

let menu = new Map<string, SlideBarLink[]>();

const adminHRMMenu = [
    new SlideBarLink('Employee list', 'view-employee','list'),
    new SlideBarLink('Add Employee','add-new-employee','add')
];

const adminCarparkMenu = [
    new SlideBarLink('List Booking Office','booking-office-management/booking-office-list','list'),
    new SlideBarLink('Add Booking Office','booking-office-management/add-booking-office','add'),
    new SlideBarLink('List Car','car-management/car-list','list'),
    new SlideBarLink('Add Car','car-management/add-car','add'),
    new SlideBarLink('List Parking Lot','parking-lot-management/parking-lot-list','list'),
    new SlideBarLink('Add Parking Lot','parking-lot-management/add-parking-lot','add'),
    new SlideBarLink('List Ticket','ticket-management/ticket-list','list'),
    new SlideBarLink('Add Ticket','ticket-management/add-ticket','add'),
    new SlideBarLink('List Trip','trip-management/trip-list','list'),
    new SlideBarLink('Add Trip','trip-management/add-trip','add'),
]
menu.set("Admin_Hrm", adminHRMMenu);
menu.set("Admin_Carpark", adminCarparkMenu);

export default menu;