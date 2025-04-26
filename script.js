document.addEventListener('DOMContentLoaded', () => {
    console.log('website loaded successfully!');
  
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar'); 
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim().toLowerCase();
        const searchMappings = [
          { terms: ['carrots', 'carrot', 'how to store carrots', 'carot', 'store carrots'], page: 'vegetables/carrots.html' },
          { terms: ['tomatoes', 'tomato', 'how to store tomatoes', 'tomatoe', 'store tomatoes'], page: 'vegetables/tomatoes.html' },
          { terms: ['potatoes', 'potato', 'how to store potatoes', 'potatoe', 'store potatoes'], page: 'vegetables/potatoes.html' },
          { terms: ['cucumbers', 'cucumber', 'how to store cucumbers', 'store cucumbers', 'cucombers'], page: 'vegetables/cucumbers.html' },
          { terms: ['lettuce', 'lettuces', 'how to store lettuce', 'store lettuce'], page: 'vegetables/lettuce.html' },
          { terms: ['spinach', 'spinaches', 'how to store spinach', 'store spinach'], page: 'vegetables/spinach.html' },
          { terms: ['broccoli', 'broccolis', 'how to store broccoli', 'store broccoli', 'broccolies'], page: 'vegetables/broccoli.html' },
          { terms: ['bell peppers', 'bell pepper', 'how to store bell peppers', 'store bell peppers'], page: 'vegetables/bell pepper.html' },
          { terms: ['onions', 'onion', 'how to store onions', 'store onions'], page: 'vegetables/onions.html' },
          { terms: ['garlic', 'garlics', 'how to store garlic', 'store garlic'], page: 'vegetables/garlic.html' },
          { terms: ['avocadoes', 'avocados', 'avocado', ], page:'vegetables/avocadoes.html'},
          { terms: ['ginger',], page: 'vegetables/ginger.html'},
          { terms: ['spring onions', 'spring onion', 'green onions', 'green onion', 'scallions', 'scallion'], page: 'vegetables/spring onion.html'},
          { terms: ['apples', 'apple'], page: 'fruits/apples.html'},
          { terms: ['bananas', 'banana'], page: 'fruits/bananas.html'},
          { terms: ['peaches', 'peach'], page: 'fruits/peaches.html'},
          { terms: ['pears', 'pear'], page: 'fruits/pears.html'},
          { terms: ['plums', 'plum'], page: 'fruits/plums.html'},
          { terms: ['blueberries', 'blueberry', 'blue'], page: 'berries/blueberries.html'},
          { terms: ['rasberries', 'rasberry', 'ras'], page: 'berries/rasberries.html'},
          { terms: ['strawberries', 'strawberry', 'straw'], page: 'berries/strawberries.html'},
          { terms: ['orange', 'oranges'], page: 'fruits/oranges.html'},
          { terms: ['limes', 'lime'], page: 'vegetables/limes.html'},
          { terms: ['lemons', 'lemon'], page: 'vegetables/lemons.html'},
          { terms: ['mushroom', 'mushrooms'], page:'vegetables/mushrooms.html'},
          { terms: ['cranberries', 'cranberry'], page: 'berries/cranberries.html'},
          { terms: ['mangoes', 'mango'], page: 'fruits/mangoes.html'},
          { terms: ['pineapple', 'pineapples'], page: 'fruits/pineapples.html'},
          { terms: ['kiwi', 'kiwis'], page: 'fruits/kiwis.html'},
          { terms: ['blackcurrants', 'blackcurrant'], page: 'berries/blackcurrants.html'},
          { terms: ['celery'], page: 'vegetables/celery.html'},
          { terms: ['cabbage'], page: 'vegetables/cabbage.html'},
          { terms: ['sweet potatoes', 'sweet potato'], page: 'vegetables/sweet potatoes.html'},
          { terms: ['grape', 'grapes'], page: 'fruits/grapes.html'},
          { terms: ['blackberries', 'blackberry'], page:'berries/blackberries.html'}
        ];
    
        const result = searchMappings.find(mapping => mapping.terms.includes(query));
        if (result) {
          window.location.href = result.page; // Navigate to the corresponding page
        } else {
          alert('No results found for: ' + query);
        }
      });
    });