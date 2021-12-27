# Gatsby Starter project + Kontent
This project is a starter kit for GatsbyJS and Kentico Kontent. The project is connected to the `Gatsby Starter Koch` Kontent project by default.  abnf

## CSS strategy
This project uses Styled Components for localized CSS.  For truly global styles, we are importing CSS files into gatsby-browser.js for injection at runtime. For any other styles we want to be globally available we are using the Styled Components ThemeProvider to make the styles/theme.js variables accessible from any styled component.

Styled Components should be localized to the component folder they are being imported into.  If a Styled Component can be reused across multiple components, consider converting it to a regular component (if it consumes its own data), or moving it to and exporting it from the styles/GlobalStyles.js file.

## Project structure
The project source structure is broken up into several contained folders.  

* The `components` folder should contain either global or reusable components that are small pieces of the project overall. 
* The `pages` folder is a Gatsby folder that will automatically create a page for each file in this folder.  
* The `styles` folder should contain all global CSS and CSS-in-JS files.
* The `template` folder should contain the Master component and styles. It also contains the Master template components like Header and Footer as well as the Page Sections switch component and all Page Sections components that it renders. (Possible future enhancement to structure might be to move the page sections out of the template folder. Should take further discussion.)