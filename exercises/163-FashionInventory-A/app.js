var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];











var result = []

function renderInventory(inventory) {

         for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < inventory[i].shoes.length; j++) {

            
          result.push([inventory[i].name + ', ' + inventory[i].shoes[j].name + ', ' + inventory[i].shoes[j].price]);
        }
      }


    
return result


}



console.log(renderInventory(currentInventory))