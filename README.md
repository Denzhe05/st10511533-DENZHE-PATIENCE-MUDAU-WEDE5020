The Sweet Crumbs Bakery website was improved by creating an external CSS stylesheet called `style.css`. The purpose of the CSS was to improve the appearance, layout, readability, consistency and responsiveness of the website.

The stylesheet is linked to all HTML pages so that the same design can be used throughout the website.
 Files Used

The website contains the following main files:
- `index.html` – Home page
- `aboutus.html` – About Us page
- `gallery.html` – Gallery page
- `enquiry.html` – Enquiry page
- `services.html` – Services page
- `styling.css` – External CSS stylesheet
- `images/` – Folder containing website images

CSS Changes Implemented

 1. External Stylesheet

A separate CSS file called `style.css` was created inside the `css` folder.

The stylesheet is connected to the HTML pages using:

```html
<link rel="stylesheet" href="css/style.css">
This allows all pages to share the same styling.
2. CSS Reset
A CSS reset was added to remove default browser margins and padding.
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
This helps create a more consistent appearance across different browsers.
3. Base Styling
The website was given a consistent:
•	Font family
•	Font size
•	Text colour
•	Background colour
•	Line height
•	Spacing
A warm cream background and dark brown text were used to match the bakery theme.
4. Typography
The headings and paragraphs were styled using different font sizes and weights.
The CSS includes:
•	font-family
•	font-size
•	font-weight
•	line-height
•	letter-spacing
This makes the website easier to read and gives the headings a clear visual hierarchy.
5. Header
The header was given:
•	A dark brown background
•	White text
•	Centre-aligned content
•	Padding
This makes the bakery name and tagline stand out.
6. Navigation
Flexbox was used to arrange the navigation menu.
The navigation includes:
•	Home
•	About Us
•	Products
•	Enquiry
•	Contact
Spacing was added between the links to make the menu easier to use.
7. Navigation Effects
Interactive effects were added using CSS pseudo-classes.
These include:
•	:hover
•	:focus
•	:active
For example, the navigation links change appearance when the mouse is placed over them.
8. Main Content
The main content area was given a maximum width and centred on the page.
Padding and spacing were also added to prevent the content from looking crowded.
9. Product Grid
CSS Grid was used to display the bakery products in an organised layout.
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}
This allows multiple products to appear neatly in columns.
10. Product Cards
The products were placed inside cards with:
•	White backgrounds
•	Borders
•	Rounded corners
•	Padding
•	Box shadows
A hover effect was also added to make the cards interactive.
11. Images
Images were styled so that they do not become larger than their containers.
img {
    max-width: 100%;
    height: auto;
}
This helps the images fit properly within the website layout.
12. Forms
The enquiry form was styled to make it easier to use.
Form elements such as:
•	Text fields
•	Select menus
•	Text areas
•	Submit buttons
•	Reset buttons
were given consistent styling.
13. Form Focus Effects
Focus effects were added to form fields.
This makes it easier for users to see which field they are currently using.
14. Buttons
The submit and reset buttons were styled using the bakery's colour scheme.
Hover effects were also added to make the buttons more interactive.
15. Tables
Tables were styled with:
•	Borders
•	Padding
•	Brown table headings
•	White heading text
•	Full-width layout
This improves the readability of information presented in tables.
16. Footer
The footer was given a dark brown background with white text.
Padding and spacing were added to create a clear ending to each webpage.
17. Responsive Design
Media queries were added so that the website can adapt to different screen sizes.
On tablets:
•	The navigation changes to a vertical layout.
•	The product grid changes to two columns.
On mobile devices:
•	The product grid changes to one column.
•	Heading sizes are reduced.
•	Content spacing is adjusted.
This makes the website easier to use on mobile phones and tablets.
Colour Scheme
The website uses a warm bakery-inspired colour scheme:
•	Cream – used mainly for the background
•	Dark Brown – used for headers, footer and buttons
•	White – used for text and product cards
•	Soft Pink – used for interactive elements
The colour scheme was selected to give the website a warm, welcoming and professional bakery appearance.
Technologies Used
The website currently uses:
•	HTML5
•	CSS3
CSS features used include:
•	CSS Reset
•	Flexbox
•	CSS Grid
•	Media Queries
•	Pseudo-classes
•	Box Shadows
•	Borders
•	Responsive Design
Purpose of the CSS Changes
The main purpose of these changes was to make the website:
•	More visually appealing
•	Easier to navigate
•	Easier to read
•	More organised
•	Consistent across all pages
•	Interactive
•	Responsive on different screen sizes
Testing
After implementing the CSS, the website should be tested by:
1.	Opening each HTML page in a web browser.
2.	Checking that the CSS is applied correctly.
3.	Testing all navigation links.
4.	Checking the product grid.
5.	Testing form fields and buttons.
6.	Moving the mouse over links and buttons to check hover effects.
7.	Resizing the browser window to test responsive design.
8.	Checking the website on a mobile-sized screen.
Conclusion
The CSS implementation improved the overall design and usability of the Sweet Crumbs Bakery website. The external stylesheet allows the same styling to be applied to all pages, while Flexbox and CSS Grid provide an organised layout. Typography, colours, borders, shadows and interactive effects improve the visual appearance. Responsive design was also added to ensure that the website can adapt to smaller screens.

