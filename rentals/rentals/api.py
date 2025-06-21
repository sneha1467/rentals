import frappe

@frappe.whitelist(allow_guest=True)
def get_emoji():
    return "😄😂🥲🥲"

def get_query_conditions_for_vehicle():
    #frappe.throw(user)
    frappe.throw("Hi")
    return "name=1"

#rentals/rentals/api.py

apps/rentals/rentals/rentals/api.py