// Copyright (c) 2025, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	refresh(frm) {


	},
    get_summary(frm){
        frm.get_field("html_code").$wrapper.append("<h1>HELLO</h1>")
    }
});
