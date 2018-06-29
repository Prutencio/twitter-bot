const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const AutoDM = () => {
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  stream.on("follow", SendMessage);
};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: Oi, me chamo Rafael, e gostaria de propor um sistema de "Uma mão lava a outra", seria o seguinte, você me ajudaria no Instagram, como por exemplo: CURTIR E COMENTAR NAS 4 FOTOS/VÍDEOS MAIS RECENTES (O comentário tem que fazer sentido com a postagem). E em troca eu lhe dou uns RTs e até lhe DIVULGO para mais de 100 mil seguidores. 

E ai, o que acha? 

Favores e Recompensas: 
CURTIDA NAS 4 FOTOS/VÍDEOS: 1 RT 
COMENTÁRIOS NAS 4 FOTOS/VÍDEOS: 1 INDICAÇÃO 

IMPORTANTE: - O comentário deve haver mais de 3 palavras na frase obrigatoriamente.
- Peço que você também obrigatoriamente salve a postagem.

Obs.: Depois de ter feito isso, me informe aqui qual é o seu perfil do instagram.

LINK DO PERFIL: https://www.instagram.com/rafaelbrunoef      

ATENÇÃO: Sempre que eu postar foto ou vídeo novo (Então é importante que me siga no Instagram e ative as notificações), faça esse mesmo processo, e me notifique por aqui, assim eu continuo a te ajudar no crescimento do seu Twitter!
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   return `Hi ${name} Thanks for being a part of my social media network. I'am the @PicsrushE founder,A new Online Image Editor completely with web technologies,I'm also a reactjs developer and medium blogger.\n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
