// drink object structure:
// drinkName = {"name": "name", "tags": [listOfTags], "ingredients": [listOfIngredients],
// "directions": "directions", "url": "picURL"}
//
// template: var drinkName = {"name": "", "tags": [], "ingredients": [], "directions": "", "url": ""}

var mojito = {href: "mojito", "name": "Mojito", "tags": ["rum", "lime", "mint", "sugar", "refreshing", "sour"],
  "ingredients": ["10 mint leaves", "1 cup ice cubes", "1.5 ounces rum", "2 tablespoons sugar",
  ".5 cup club soda"], "directions": "Muddle mint, add ice, serve with straw.",
  "url": "http://cdn-img.health.com//sites/default/files/wp_migrated_images/skinnygirl-mint-mojito-400x400.jpg"}

var margarita = {href: "margarita", "name": "Margarita", "tags": ["tequila", "triple sec", "lime", "salt", "sour"],
  "ingredients": [".75 oz Fresh squeezed lime juice", "1 oz triple sec", "1.5 oz blanco tequila", "salt"],
  "directions": "Shake with Ice. Garnish with lime.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2013/04/Partida-Margarita.jpg"};

var moscowMule = {href: "moscowMule", "name": "Moscow Mule", "tags": ["vodka", "ginger beer", "lime", "sour", "collins", "sour", "herb", "spicy"],
  "ingredients": ["1.5 oz vodka", ".5 oz lime juice", ".5 cup ginger beer", "1 lime wedge", "ice cubes"],
  "directions": "Stir. Garnish with lime.",
  "url": "http://www.thedrinkkings.com/wp-content/uploads/2015/12/Moscow-Mule-6-630-630x660.jpg"};

var oldFashioned = {href: "oldFashioned", "name": "Old Fashioned", "tags": ["bourbon", "sugar", "bitters", "orange", "club soda", "cherry", "bitter", "herb"],
  "ingredients": ["4 dashes Angostura bitters", "1 tsp sugar", "1 orange wheel", "1 maraschino cherry",
  "1 splash club soda", "2 oz bourbon"],
  "directions": "Muddle the bitters, sugar, orange wheel, cherry, and soda. Add the bourbon and fill with ice. Garnish with orange and cherry.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2012/09/bourbon-old-fashioned.jpg"};

var manhattan = {href: "manhattan", "name": "Manhattan", "tags": ["whiskey",  "rye", "vermouth", "bitters", "bitter"],
  "ingredients": ["2 oz rye whiskey", "1 oz sweet vermouth", "5 drops Angostura bitters"],
  "directions": "Stir with ice. Garnish with a cherry.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2010/01/manhattan1.jpg"};

var daiquiri = {href: "daiquiri", "name": "Daiquiri", "tags": ["rum", "lime", "simple syrup", "sour"],
  "ingredients": ["2 oz Dark rum", "1 oz Fresh lime juice", "1 oz Simple syrup"],
  "directions": "Shake with ice. Garnish with a lime wheel.",
  "url": "http://punchdrink.com/wp-content/uploads/2014/01/key-daiquiri.jpg"};

var whiskeySour = {href: "whiskeySour", "name": "Whiskey Sour", "tags": [ "bourbon", "lemon", "simple syrup", "cherry", "sour"],
  "ingredients": ["1.5 oz Bourbon", ".75 oz Fresh lemon juice", ".75 oz Simple syrup (1 part water, 1 part sugar)", "1  Cherry"],
  "directions": "Shake with Ice. Garnish with a cherry and lemon wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2011/07/fa-Whiskey-Sour.jpg"};

var dryMartini = {href: "dryMartini", "name": "Dry Martini", "tags": ["gin", "vermouth", "bitters", "bitter"],
  "ingredients": ["2.5 oz Gin", ".5 oz Dry vermouth", "1 dash Orange bitters"],
  "directions": "Stir with ice. Garnish with a lemon twist.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2013/08/Dry-Martini.jpg"};

var bloodyMary = {href: "bloodyMary", "name": "Bloody Mary", "tags": ["vodka", "lemon", "lime", "tomato juice", "tabasco sauce", "horseradish", "celery salt", "pepper", "paprika", "worcestershire sauce", "sweet"],
  "ingredients": ["1 Lemon wedge", "1 Lime wedge", "2 oz Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 dashes Worcestershire sauce", "1 pinch Celery salt", "1 pinch Ground black pepper", "1 pinch Smoked paprika"],
  "directions": "Coat rim of glass with salt. Add Ice. Add lemon juice. Shake with ice. Garnish with a celery stalk and a lime wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2011/09/10210138/bloody-mary-recipe.jpg"};

var sidecar = {href: "sidecar", "name": "Sidecar", "tags": ["cognac", "triple sec", "lemon", "sugar", "sweet"],
  "ingredients": ["2 tbsp sugar", "1 lemon wedge", "1.5 oz Cognac", "1 oz Triple Sec", ".5 oz fresh lemon juice", "1 cup ice"],
  "directions": "Coat rim of glass with sugar. Shake with ice. Garnish with a piece of orange peel.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2011/09/sidecar2.jpg"};

var cosmopolitan = {href: "cosmopolitan", "name": "Cosmopolitan", "tags": ["vodka", "cointreau", "citus", "lime", "cranberry juice", "sweet", "berry"],
  "ingredients": ["1.5 oz Citrus vodka", "1 oz Cointreau", ".5 oz Fresh lime juice", "1 dash Cranberry juice"],
  "directions": "Shake with ice and strain into a chilled cocktail glass. Garnish with a lime wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2011/01/cosmopolitain2.jpg"};

var maiTai = {href: "maiTai", "name": "Mai Tai", "tags": ["rum", "orange curaçao", "lime", "simple syrup", "almond syrup", "sour"],
  "ingredients": [".75 oz Fresh lime juice", ".25 oz Simple syrup (2 parts sugar, 1 part water)", ".25 oz Orgeat almond syrup", ".5 oz Orange curaçao", "2 oz rum"],
  "directions": "Shake with ice. Garnish with half of a juiced lime and a fresh mint sprig.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2017/03/07152918/mai-tai-720x720-recipe.jpg"};

var irishCoffee = {href: "irishCoffee", "name": "Irish Coffee", "tags": ["irish whiskey", "brown sugar syrup", "coffee", "whipped cream", "sweet"],
  "ingredients": ["1.5 oz Irish whiskey", "1 oz Brown sugar syrup (1:1 brown sugar to water, heated until dissolved)", "Hot coffee", "Whipped cream"],
  "directions": "Fill with hot water, let it sit for 2 minutes, then discard the water. Top with lightly whipped cream.",
  "url": "http://robbreport.com/sites/default/files/images/articles/2016Mar/2048591//1_irishcoffee.jpg"};

var mintJulep = {href: "mintJulep", "name": "Mint Julep", "tags": ["bourbon", "mint", "simple syrup", "bitter"],
  "ingredients": [".25 oz simple syrup", "8  Mint leaves", "2 oz Bourbon"],
  "directions": "Stir with ice. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2013/04/Mint-Julep.jpg"};

var mimosa = {href: "mimosa", "name": "Mimosa", "tags": ["sparkling wine", "orange juice", "sweet"],
  "ingredients": ["3 oz Orange juice", "3 oz Sparkling wine, chilled"],
  "directions": "Add the orange juice to a Champagne flute. Fill with sparkling wine.",
  "url": "http://www.thedrinkkings.com/wp-content/uploads/2014/06/Mimosa-10.jpg"};

var plantersPunch = {href: "plantersPunch", "name": "Planters Punch", "tags": ["rum", "grenadine", "orange juice", "fruity", "cobbler", "sweet"],
  "ingredients": ["1 1/2 ounces dark rum", "1/4 ounce grenadine", "2 ounces orange juice", "Seasonal fruit for garnish"],
  "directions": "Shake with ice. Strain into a glass. Top with club soda. Garnish with seasonal fruits.",
  "url": "https://fthmb.tqn.com/lwS-G0Tlx8lXPFaaoi1zgQix0fI=/960x0/filters:no_upscale()/about/Planters-punch-GettyImages-569035115-589e1ae23df78c4758e4f4c9.jpg"};

var tomCollins = {href: "tomCollins", "name": "Tom Collins", "tags": ["gin", "lemon", "simple syrup", "club soda", "sour", "spicy"],
  "ingredients": [".75 oz Fresh lemon juice", ".75 oz Simple syrup", "1.5 oz Gin", "splash Club soda"],
  "directions": "Shake with ice and strain into a glass. Top with club soda and garnish with a lemon wheel and a cherry.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2010/12/tom-collins.jpg"};

var negroni = {href: "negroni", "name": "Negroni", "tags": ["vermouth", "gin", "campari", "highball", "bitter", "herb"],
  "ingredients": ["1 oz Campari", "1 oz Gin", "1 oz Sweet vermouth"],
  "directions": "Stir with ice. Garnish with an orange half-wheel.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2013/04/18110158/negroni-720x720-recipe.jpg"};

var darkAndStormy = {href: "darkAndStormy", "name": "Dark and Stormy", "tags": ["rum", "ginger beer", "lime", "sour"],
  "ingredients": [".75 oz fresh lime juice", "4 oz ginger beer", "2 oz Rum"],
  "directions": "Shake with ice. Top with the ginger beer. Garnish with a lime wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2016/10/04133803/dark-n-stormy-720sq.jpg"};

var pinaColada = {href: "pinaColada", "name": "Pina Colada", "tags": ["rum", "coconut milk", "coconut", "pineapple", "sweet"],
  "ingredients": ["1.5 oz Light or gold rum", "2 oz Coconut milk", "2 oz Fresh pineapple juice"],
  "directions": "Shake with ice. Garnish with a cherry and a pineapple wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2015/03/Draaanks-Pina-Colada.jpeg"};

var longIslandIcedTea = {href: "longIslandIcedTea", "name": "Long Island Iced Tea", "tags": ["tequila", "rum", "triple sec", "gin", "simple syrup", "lemon", "cola", "sweet"],
  "ingredients": [".75 oz Gin", ".75 oz White rum", ".75 oz Silver tequila", ".75 oz Vodka", ".75 oz Triple sec", ".75 oz Simple syrup", ".75 oz Lemon juice", "splash Cola"],
  "directions": "Stir with ice. Top with a splash of cola. Garnish with a lemon wedge.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2017/03/07152907/long-island-iced-tea-720x720-recipe.jpg"};

var caipirinha = {href: "caipirinha", "name": "Caipirinha", "tags": ["cachaca", "lime", "sugar", "sweet", "spicy"],
  "ingredients": ["half Lime, cut into wedges", "2 tsp Sugar", "2 oz Cachaça"],
  "directions": "Muddle the sugar and lime. Stir with ice. Garnish with a lime wheel.",
  "url": "http://www.tastecocktails.com/wp-content/uploads/2016/07/caiprinha-feature.jpg"};

var whiteRussian = {href: "whiteRussian", "name": "White Russian", "tags": ["vodka", "kahlua", "heavy cream", "sweet"],
  "ingredients": ["2 oz Vodka", "1 oz Kahlua", "1 oz Heavy Cream"],
  "directions": "Stir with ice ice. Top with a large splash of heavy cream.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2011/09/02120028/white-russian-720x720-recipe.jpg"};

var fortWashingtonFlip = {href: "fortWashingtonFlip", "name": "Fort Washington Flip", "tags": ["applejack", "egg", "bitter"],
  "ingredients": ["1.5 oz Applejack", "0.75 oz Benedictine", "0.5 oz Maple Syrup", "1 egg"],
  "directions": "Shake with ice very vigorously. Strain into glass. Garnish with a grating of fresh nutmeg.",
  "url": "https://temperedspirits.files.wordpress.com/2011/11/applejack-5-of-5.jpg"};

var tequilaSunrise = {href: "tequilaSunrise", "name": "Tequila Sunrise", "tags": ["tequila", "orange juice", "cobbler", "sour"],
  "ingredients": ["1.5 oz Applejack", "0.75 oz Benedictine", "0.5 oz Maple Syrup", "1 egg"],
  "directions": "Shake with ice very vigorously. Strain into glass. Garnish with nutmeg.",
  "url": "http://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg"};

var drinksList = [mojito, margarita, caipirinha, longIslandIcedTea, pinaColada,
  darkAndStormy, negroni, tomCollins, plantersPunch, mimosa, mintJulep, cosmopolitan,
  maiTai, irishCoffee, sidecar, bloodyMary, dryMartini, whiskeySour, daiquiri,
  manhattan, oldFashioned, moscowMule, whiteRussian, fortWashingtonFlip, tequilaSunrise];

var tagsList = ["rum", "lime", "mint", "sugar", "refreshing", "tequila", "triple sec", "salt", "cachaca", "gin",
  "simple syrup", "lemon", "cola", "pineapple", "coconut milk", "coconut", "ginger beer", "campari", "vermouth",
  "club soda", "grenadine", "orange juice", "fruity", "sparkling wine", "bourbon", "sours", "citus", "vodka",
  "cointreau", "cranberry juice", "almond syrup", "orange curaçao", "irish whiskey", "brown sugar syrup",
  "coffee", "whipped cream", "cognac", "tomato juice", "tabasco sauce", "horseradish", "celery salt",
  "pepper", "paprika", "worcestershire sauce", "bitters", "cherry", "rye", "whiskey", "orange", "kahlua",
  "heavy cream", "egg", "applejack", "sweet", "sour", "bitter", "berry", "herb", "spicy"];

var alcoholList = ["rum", "tequila", "gin", "whiskey", "vodka", "champagne", "beer", "wine", "white wine", "red wine",
  "cachaca", "kahlua", "cognac", "rye", "cointreau", "sparkling wine", "bourbon", "vermouth", "triple sec", "irish whiskey",
  "orange curaçao", "applejack"]


  // Martinez
  // Brooklyn
  // French 75
  // Jack Rose
  // Negroni
  // Boulevardier
  // Sazerac
  // Vieux Carré
  // Ramos Gin Fizz
  // Pisco Sour
  // Last Word
