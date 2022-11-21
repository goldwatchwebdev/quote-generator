let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
    [
        `"I want to know God's thoughts... the rest are details." - Albert Einstein`,
        `"An eye for eye only ends up making the whole world blind." M.K.Gandhi`,
        `"Whatever the mind can conceive and believe, the mind can achieve." Dr.Napoleon Hill`,
        `"Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius.Love, love, love, that is the soul of genius." Wolfgang Amadeus Mozart`,
        `"Keep away from people who try to belittle your ambitions.Small people always do that, but the really great make you feel that you, too, can become great." Mark Twain`,
        `"Great works are performed, not by strength, but by perseverance." Samuel Johnson`, 
        `"I made this letter longer than usual because I lack the time to make it short." Blaise Pascal`,
        `"Never worry about the size of your Christmas tree.In the eyes of children, they are all 30 feet tall." Larry Wilde`,  
        `"Peace on earth will come to stay, When we live Christmas every day." Helen Steiner Rice`,
        `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end." Abraham Lincoln`,
    ];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})






