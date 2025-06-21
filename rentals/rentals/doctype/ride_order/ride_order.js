// Copyright (c) 2025, BWH and contributors
// For license information, please see license.txt

let i =0;
frappe.ui.form.on("Ride Order", {
    onload(frm){
        console.log("Running Load...")
    },
    setup(frm){
        console.log("setup...")
    }
    ,
 	refresh(frm) {
        console.log("On refresh ..")

        if(frm.doc.status != "Accepted"){    
            frm.add_custom_button("Accept",()=>{
                //status => Accepted
                frm.set_value("status","Accepted");
                frm.save();
            }, "Actions")

            frm.add_custom_button("Reject",()=>{
                //status => Accepted
                frm.set_value("status","Rejected");
                frm.save();
            }, "Actions")
        }
 	},
    status(frm){
        console.log("Status Changed ...",i);
        i++;
    },
    pickup_address(frm){
        console.log("Pickup address ...")
    }
});
