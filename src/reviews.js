

add_reviews()

function add_reviews() {
    //document.getElementById("reviews2").innerHTML = generate_review("Jacob Marx", "The Chicken Parm is incredible!")
    document.getElementById("reviews").innerHTML = generate_reviews()
}

function generate_reviews() {
    const customers = ["Jacob Marx", "David Barnard", "Linda McMahon", "Violet Brock"]
    const reviews = [
        "Great if you have someone with food allergies, for the first time I was able to get take out for every one in our family even the one with allergies! Great food, great staff and great place to sit and have a quick drink",
        "The Chicken Parm is incredible!",
        "I love this place. I’ve only been here a few times but it’s always been great. ",
        "I order a particular pizza every week and I am never disappointed. The staff are very helpful and kind. The kitchen is very clean and organized."
    ]

    var review_html = ""

    for (var i = 0; i < customers.length; i++) {
        review_html += generate_review(customers[i], reviews[i])
    }

    return review_html

}

function generate_review(customer_name, customer_review) {
    var rev_html = "<div class='review'>"
    rev_html += "<span class='customer'>Customer: " + customer_name + "</span>"
    rev_html += "<br><br>"
    rev_html += customer_review
    rev_html += "</div>"

    return rev_html
}