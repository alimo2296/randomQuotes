var quotes=[ 
"”A room without books is like a body without a soul”.<br/> ― Marcus Tullius Cicero",
"”So many books so little time”.<br/> ― Frank Zappa",
"“Be the change that you wish to see in the world.”<br/> ― Mahatma Gandhi",
"“Be yourself; everyone else is already taken.”<br/> ― Oscar Wilde",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br/> ― Albert Einstein",
"“I love deadlines. I love the whooshing noise they make as they go by.”<br/> ― Douglas Adams, The Salmon of Doubt"

]

function generateQuote(){
    var randomNumber=Math.floor(Math.random() * quotes.length)
    document.getElementById("quoteOutput").innerHTML=quotes[randomNumber]

}
