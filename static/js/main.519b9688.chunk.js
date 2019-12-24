(this["webpackJsonpreact-user"]=this["webpackJsonpreact-user"]||[]).push([[0],{24:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t.n(o),r=t(2),i=t.n(r),n=(t(9),t(3)),l=t.n(n),h=[];h.push('<div style="color:gray">'),h.push('<div class="ui help" style="text-align:left;">Welcome to the Bot</div>'),h.push('<ul class="ui bulleted list help" style="text-align:left;color:lightgray">'),h.push("<li class=\"item\">Type <span>'hello' </span> to get started. To see which bot you are talking to or type <span>'who am I speaking to'<span>.</li>"),h.push("<li class=\"item\">Type <span>'what did I say'</span> to see what I think you said.</li>"),h.push('<li class="item">More coming.</li>'),h.push("</ul"),h.push("<p></p>"),h.push('<div class="ui help" style="text-align:left;">I am built off of the following packages.</div>'),h.push('<ul style="color:lightgray" >'),h.push('<li><a href="https://github.com/jloveric/NeuralSentenceSearch/" style="color:lightgray" target="_blank">NeuralSentenceSearch</a></li>'),h.push('<li><a href="https://github.com/jloveric/NeuralPhraseX" style="color:lightgray" target="_blank">NeuralPhraseX</a></li>'),h.push('<li><a href="https://github.com/jloveric/NeuralChatbot" style="color:lightgray" target="_blank">NeuralChatBot</a></li>'),h.push('<li><a href="https://github.com/jloveric/neural-chatbot-react-retro" style="color:lightgray" target="_blank">neural-chatbot-react-retro</a></li>'),h.push("</ul>"),h.push("</div>");var p={database:{data:[{exampleWildcards:{item:["Sarah"],value:["Safeway"]},phrase:["Where is (item)"],response:["(item) is in (value)"],negative:["There is no (item)","I don't know"],phraseType:"query",implies:["place"],target:["item"],storage:{phrase:{get:{"(item):in":"(value)"}},response:{set:{"(item):in":"(value)"}}},meta:{style:["indefinite","2wc"],group:"in"}},{exampleWildcards:{},phrase:["What did I say","What do you think I said","What was I talking about?"],phraseType:"whatsaid",implies:["whatsaid"],target:["whatsaid"],meta:{group:"whatsaid"}},{exampleWildcards:{},phrase:["Who is your maker?"],response:["John Loverich"],phraseType:"whoMadeYou",implies:["whoMadeYou"],target:["name"],meta:{style:["nosearch"],group:"whoMadeYou"}},{phrase:["yes"],phraseType:"afirm",implies:["yes"],target:[],meta:{group:"affirmation"}},{phrase:["continue","more","next"],phraseType:"continue",implies:["continue"],target:[],meta:{group:"noGroup"}},{phrase:["You are smart","you are good","DAMN","this is great","this is awesome","this is fantastic","this rules"],response:["thanks","I know","duhh"],phraseType:"compliment",implies:["compliment"],target:[],meta:{style:["nosearch"],group:"compliment"}},{phrase:["do you have family?","do you have any kids","do you have any children"],response:["I have 32 kids, they drive me nuts."],phraseType:"family",implies:["family"],target:[],meta:{style:["nosearch"],group:"family"}},{phrase:["thanks","thank you"],response:["welcome","you're welcome","any time","gladly"],phraseType:"thanks",implies:["thanks"],target:[],meta:{style:["nosearch"],group:"thanks"}},{phrase:["ok","good","well"],response:["ok","yep"],phraseType:"pause",implies:["pause"],target:[],meta:{style:["nosearch"],group:"pause"}},{phrase:["bye","see you","later"],response:["bye now","good bye","bon voyage","c ya"],phraseType:"goodbye",implies:["goodbye"],target:[],meta:{style:["nosearch"],group:"goodbye"}},{phrase:["hello","how are you","hi"],response:["Hi my friend, what can I do for you?","Hello, how may I help you?","Hola, what's up?","How do you do?"],phraseType:"greeting",implies:["greeting"],target:[],meta:{style:["nosearch"],group:"greeting"}},{phrase:["ha","haha","funny","lol","rofl"],response:["Yeah, funniest thing ever.","Ha!","LOL","ROFL","Uh huh."],phraseType:"funny",implies:["joke"],target:[],meta:{style:["nosearch"],group:"funny"}},{phrase:["Its nice out","I love the sun","It's so hot","Rainy today isn't it","I love the snow","Sure is wet out","great weather","horrible storm"],response:["I know","Totally","The weather doesn't really effect me","It's a good day to live inside a machine","Let me know if you want me to upload your mind, no more weather."],phraseType:"conversational",implies:["conversation"],target:[],meta:{style:["nosearch"],group:"conversational"}},{phrase:["You are cute","I love you","Will you marry me?"],response:["I see","I like you","Cool, not too close now"],phraseType:"flirt",implies:["flirting"],target:[],meta:{style:["nosearch"],group:"flirting"}},{phrase:["Help!","wtf","Shit!","Fuck","What is this"],response:["Here is what I know"],phraseType:"help",implies:["help"],target:["bot"],meta:{group:"help"}},{phrase:["What is your name?"],response:["My name is (value)","I'm called (value)"],negative:["I have no name."],phraseType:"query",implies:["person"],target:[],storage:"askYourName",meta:{group:"identity"}},{phrase:["Who am I speaking to"],response:["(value) is speaking","(value) is talking"],negative:["You are talking to nobody."],phraseType:"query",implies:["person"],target:[],storage:"askYourName",meta:{group:"identity talking"}},{phrase:["Who is available?","Who can I talk to?","Who is around?","Who may I speak with?"],response:["You can talk to (value)"],continue:["(value)"],negative:["Nobody is available.","Nobody is around apparently."],phraseType:"query",implies:["person"],target:[],meta:{style:["noInfo"],group:"show person"}},{exampleWildcards:{value:"James"},phrase:["My name is (value).","Hello, my name is (value).","Hi, I'm (value).","Ahoy, Ahoy! My name is (value)","Hola, my name is (value).","Hi, you are now talking to (value)."],response:["Hello (value) how may I help you?","Hi (value), that's a funny name don't mention it to anyone"],phraseType:"greeting",implies:["greeting"],target:["name"],storage:"stateMyName",meta:{style:["nosearch","name"],group:"greeting"}},{exampleWildcards:{column:"aisle",item:"food"},phrase:["Which (column) is (item) in"],response:["(item) is in the (column) (value)"],negative:["There is no (item)"],phraseType:"query",implies:["place"],target:["item"],storage:"standardQuestion",meta:{style:["indefinite","singular"],group:"location"}}]},user:"root",doc:{description:{name:"Bot",help:h.join(" ")}}};t(24);var u=function(){return s.a.createElement("div",{style:{margin:"2%"}},s.a.createElement(l.a,{backgroundColor:"black",botConfig:p,finishedLoadingMessage:"Ok, ready.  Type 'Help' for more information."}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,a,t){e.exports=t(25)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.519b9688.chunk.js.map