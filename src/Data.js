const Data = {
  drinks: [
    {
        name: 'Dark & Stormy',
        id: '1',
        image: 'dark_and_stormy.jpg',
        ingredients: ['rum','ginger beer', 'lime juice'],
        directions: 'Fill a tall glass with ice cubes. Add rum, then pour in ginger beer and lime juice. Stir with a barspoon. Garnish with a lime wedge.',
        rating: '9',
        description: 'Sweet and sharp, the Dark and Stormy climbed out of the Bermuda Triangle to become one the most popular Caribbean rum cocktails you can make.',
    },
    {
      name: 'French 75',
      id: '2',
      image: 'french_75.jpg',
      ingredients: ['london dry gin','superfine sugar', 'lemon juice', 'brut champagne'],
      directions: 'Shake gin, sugar, and lemon juice well with cracked ice in a chilled cocktail shaker. Strain into a Collins glass half-full of cracked ice. Top off with champagne.',
      rating: '10',
      description: 'It looks like bubbly effervescence, but looks deceive. The French 75, with gin and champagne, packs a wallop, made all the more dangerous by how delightful it is to drink.',
    },
    {
      name: 'Boulevardier',
      id: '3',
      image: 'boulevardier.jpg',
      ingredients: ['bourbon','campari', 'sweet vermouth'],
      directions: 'Stir ingredients with ice in a mixing glass until chilled. Strain into a coupe glass. Garnish with an orange twist.',
      rating: '9',
      description: 'The Negroni\'s wintery counterpart is the Boulevardier, a whiskey cocktail invented for expat Americans bumming around Paris in the early 20th century.',
    },
    {
      name: 'Bloody Mary',
      id: '4',
      image: 'bloody_mary.jpg',
      ingredients: ['tomato juice','horseradish', 'worchestershire sauce', 'celery seeds', 'hot sauce', 'lemon juice', 'lime juice', 'salt', 'pepper', 'vodka'],
      directions: 'Blend tomato juice, horseradish, Worcestershire, and celery seeds until smooth. Add hot sauce, lemon juice, lime juice, salt, and pepper, then blend. Adjust the mix depending on how spicy, salty, or citrusy you like it. Add 1 tbsp. vodka to stabilize the mix and keep the juices fresh, then blend. Combine 6-8 oz. of the mix with 2 oz. of vodka into a glass with ice. Pour back and forth into another glass 3 or 4 times to mix, then garnish however you like.',
      rating: '8',
      description: 'Oh yeah, you can and should make your own Bloody Mary mix. It\'s labor intensive, sure, but it\'s highly customizable. You can decide just how you want the horseradish to play off the citrus that plays off the hot sauce heat.',
    },
    {
      name: 'Gimlet',
      id: '5',
      image: 'gimlet.jpg',
      ingredients: ['london dry gin','rose\'s lime juice'],
      directions: 'Shake ingredients in a cocktail shaker with cracked ice. Strain into a chilled cocktail glass, and garnish with a lime.',
      rating: '9',
      description: 'Rose\'s lime cordial is perfectly balanced by herbaceous dry gin in this tart, impossible-to-screw-up British cocktail.',
    },
    {
      name: 'Moscow Mule',
      id: '6',
      image: 'moscow_mule.jpg',
      ingredients: ['vodka','ginger beer', 'lime juice'],
      directions: 'Squeeze lime juice into a Moscow Mule mug, then drop in spent shell. Add 2-3 ice cubes and vodka, then fill with ginger beer.',
      rating: '8',
      description: 'This cocktail is crisp and cooling, and good for any season. Plus it (usually) comes in a copper mug, which is neat.',
    },
    {
      name: 'Aperol Spritz',
      id: '7',
      image: 'aperol_spritz.jpg',
      ingredients: ['aperol','prosecco', 'club soda', 'orange slices'],
      directions: 'Build Aperol, prosecco, and club soda in a wine glass over ice. Garnish with fresh orange slices in the glass.',
      rating: '7',
      description: 'For daytime drinking, you really can\'t beat an Aperol Spritz. It\'s pretty basic, but then again, that\'s its charm. Just ask all the bar patrons crowding the patio around you, Spritzes in hand.',
    },
    {
      name: 'Mojito',
      id: '8',
      image: 'mojito.jpg',
      ingredients: ['white rum','lime juice', 'superfine sugar', 'mint leaves', ['club soda' || 'seltzer']],
      directions: 'In a smallish Collins glass, muddle lime juice with 1/2 to 1 tsp. superfine sugar. Add the mint leaves, mushing them against the side of the glass, then fill the glass 2/3 with cracked ice and pour in the rum. Pitch in the squeezed-out lime shell and top off with club soda or seltzer.',
      rating: '9',
      description: 'Really, it\'s difficult to imagine a combination more refreshing than rum, lime, mint, and bubbles. We have Cuba to thank, and thank heartily, for the Mojito.',
    },
    {
      name: 'Manhattan',
      id: '9',
      image: 'manhattan.jpg',
      ingredients: ['rye whiskey', 'italian vermouth', 'angostura bitters'],
      directions: 'Stir ingredients well with cracked ice, then strain into a chilled cocktail glass. Garnish with a twist or maraschino cherry.',
      rating: '9',
      description: 'A Manhattan is strong in all ways. The flavor is deep and unabashed, and the ABV is nothing to scoff at. It\'s a cocktail stalwart, and not for the weak of heart.',
    },
    {
      name: 'Margarita',
      id: '10',
      image: 'margarita.jpg',
      ingredients: ['silver tequila','cointreau', 'lime juice', 'course salt'],
      directions: 'Rub the rim of a chilled cocktail glass with lime juice and dip in coarse salt. Shake tequila, Cointreau, lime juice, and ice in a mixing glass, then strain into the salted glass over ice.',
      rating: '9',
      description: 'The Margarita is the workhorse of summer. It\'s best made with Cointreau, and if you like it a little sweeter, agave syrup is a killer addition.',
    },
    {
      name: 'Whickey Sour',
      id: '11',
      image: 'whiskey_sour.jpg',
      ingredients: [['bourbon' || 'rye'],'lemon juice', 'superfine sugar', 'egg white'],
      directions: 'Shake ingredients well with cracked ice, strain into a chilled cocktail glass, and garnish with a lemon wedge and/or maraschino cherry.',
      rating: '9',
      description: 'For those nights when you want to cleanse your palate, opt for a puckery Whiskey Sour. Bourbon is traditional, but rye can lend it some punch.',
    },
    {
      name: 'Dry Martini',
      id: '12',
      image: 'dry_martini.jpg',
      ingredients: ['dry vermouth','gin', ['olives' || 'lemon twist']],
      directions: 'Fill a metal shaker with cracked ice. Pour in the dry vermouth, stir briefly, and strain out (this may be discarded). Add gin, then stir briskly for about 10 seconds. Strain into a chilled cocktail glass, and garnish with olives or a lemon twist.',
      rating: '9',
      description: 'A classic martini technically should be made with gin and served bone-chillingly cold. Order it stirred, not shaken. Sorry, 007.',
    },
    {
      name: 'Daiquiri',
      id: '13',
      image: 'daiquiri.jpg',
      ingredients: ['white rum','lime juice', 'superfine sugar'],
      directions: 'Squeeze lime into a shaker, stir in sugar, then add rum. Shake well with cracked ice and strain into a chilled cocktail glass.',
      rating: '6',
      description: 'A citrusy marriage of rum and lime in the Caribbean gave us the simple but satisfying Daiquiri. Strain it and serve it sans ice.',
    },
    {
      name: 'Negroni',
      id: '14',
      image: 'negroni.jpg',
      ingredients: ['london dry gin','campari', 'vermouth'],
      directions: 'Add the ingredients together in a cocktail shaker. Stir well with cracked ice. Strain into a glass over cubed ice, then garnish with a twist of orange peel.',
      rating: '9',
      description: 'The Negroni is the epitome of refined summer drinking: sweet and bitter and invigorating.',
    },
    {
      name: 'Old Fashioned',
      id: '15',
      image: 'old_fashioned.jpg',
      ingredients: [['bourbon' || 'rye whiskey'],'angostura bitters', 'sugar cube', 'club soda'],
      directions: 'Place sugar in an Old Fashioned glass. Wet it down with Angostura bitters and a splash of club soda, then muddle. Add a large ice cube and whiskey. Stir, then garnish with an orange twist.',
      rating: '9',
      description: 'The Old Fashioned is as classic as they come—the original whiskey cocktail. Even in the two centuries since its inception, it\'s still the most respected cocktail in the world, and not the least bit musty for its age. Rye will make it spicier than bourbon.',
    },
  ],
  ingredients: [
    {
      alcohol: [
        'bourbon',
        'rye whiskey',
        'london dry gin',
        'white rum',
        'gin',
        'vodka',
        'brandy',
        'wine',
        'tequila',
        'ginger beer',
        'beer',
        'rum',
        'kahlua',
        'campari',
        'baileys',
        'amaretto',
        'vermouth',
        'sweet vermouth',
        'lime juice',
        'angostura bitters',
        'sugar cube',
        'club soda',
      ]
    }
  ]
}

export default Data