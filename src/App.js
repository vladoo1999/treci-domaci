import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './components/Pocetna';
import Footer from './components/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Recepti from './components/Recepti';
import { useState } from 'react';
import Omiljeni from './components/Omiljeni';
import CopyButton from "./components/CopyButton";

function App() {
  const telefon = "+3816884564";
  const email = "zdravi.recepti@gmail.com";


  const [omiljeniR,setOmiljeniR]=useState([]);

  const[sviRecepti] = useState([

    {
      id:1,
      naziv:"KINESKA PILEĆA SALATA",
      slika: "https://stil.kurir.rs/data/images/2018/04/19/13/152345_shutterstock-523874845_ls.jpg",
      opis:" Ova salata je jedna od vrhunskih fuzijskih namirnica na svetu. To je jelo inspirisano istokom koje je popularizovao austrijski kuvar, Wolfgang Puck, u Beverly Hillsu u njegovom restoranu Spago davne 1980. Bez obzira na različito poreklo, nesumnjivo je jedna od najpopularnijih salata u Americi, koja deli prostor na meniju u restoranima sa četiri zvezdice, kao i Wendy. Šteta što je većina verzija prehrambene katastrofe, zamagljena previše prelivom i previše prženim rezancima. Ova lakša verzija kineske pileće salate je vernija Wolfgangovom originalnom stvaranju. ",
      vreme: 40,
      kalorije: 380,
      link: <a href="https://www.youtube.com/watch?v=UCVHAtY2S3k&ab_channel=Oklagija" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    },
    {
      id:2,
      naziv:"PILEĆI POLPETI",
      slika: "https://www.fitness.com.hr/images/uploads/1197556/243507d3-e365-4ff6-9cf4-0184c3775e41.jpg",
      opis:"  Većina sveta ima svoju verziju kombinacije mlevenog mesa i začina, a vi biste mudro trebali uključiti nekoliko njih u svoju kuhinju. Ove pileće pljeskavice su inspirisane roštiljem sa ćoška u Vijetnamu i Tajlandu, gde đumbir, beli luk i čili preovladavaju. Sa tim hrabrim ukusima, zajedno sa čarom vrelog roštilja na uglju, neće vam biti potrebna masna i teška mešavina mesa, pa čak ni gomila špageta, da biste napravili izvanrednu večeru sa ovim receptom pilećih pljeskavica. Poslužite ih sa kuvanim pirinčem, krastavcima, možda malo umaka i velikim listovima zelene salate i dozvolite svakome da napravi svoj burito.",
      vreme: 60,
      kalorije: 230,
      link: <a href="https://www.youtube.com/watch?v=i1I0IkeQ1vs&ab_channel=SOSKuhinja%2FKitchen" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    },
    {
      id:3,
      naziv:"GOVEDINA SA BROKOLIJEM",
      slika: "https://static.vesti.rs/slike-4/Ukusno-i-zdravo-Govedina-sa-brokolijem.png",
      opis:" Sveži cvetovi brokolija i nežne trake goveđeg bifteka kuvaju se do savršenstva u azijskom sosu od đumbira i belog luka. Ovako pripremljeno jelo iznenadiće vašu porodicu i može ubrzo postati omiljeni ručak. Idealno je kada vam dolaze gosti i možete ih iznenaditi zanimljivim ukusom i krtošću goveđeg mesa. Reč je o zdravom, a ukusnom obroku, za koji vam ne treba mnogo slobodnog vremena prilikom pripreme.",
      vreme: 90,
      kalorije: 330,
      link: <a href="https://www.youtube.com/watch?v=UbIyXoNMB1E&ab_channel=Tasty" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    },
    {
      id:4,
      naziv:"TAJLANDSKA KARI PILETINA",
      slika: "https://media.vitkigurman.com/2014/03/thai-curry-dmBio-COVER.jpg",
      opis:" Sa svojim mirisom đumbira i limunske trave, čilija i kokosovog mleka, tajlandski kari u jednom jelu spaja sve klasične ukuse jugoistočnoazijske kuhinje - slane, kisele, gorke, ljute. Štaviše, svoj pun ukus dobija od moćnih antioksidanata koji se nalaze u sastojcima. Čak i kokosovo mleko sadrži laurinsku kiselinu, jedan od najzdravijih oblika masti koje možete konzumirati. Ukusi mogu biti egzotični, ali nežno meso piletine, buket povrća i bogato kokosovo mleko svi će imati predivan ukus u ovom tajlandskom receptu za pileći kari.",
      vreme: 30,
      kalorije: 340,
      link: <a href="https://www.youtube.com/watch?v=FY3ZTg9W824&ab_channel=DamiroveGastrolomije" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    },
    {
      id:5,
      naziv:"SVINJSKI KOTLETI U TERIJAKI SOSU",
      slika: "https://shop.nikas.hr/wp-content/uploads/2023/04/csm_pork_neck_ter_marinade_en__1_292d870b88.jpg",
      opis:" Ovo je prerada starog specijala Homera Simpsona: svinjski odresci sa sosom od jabuka. Ova svinjetina je natopljena slatkom marinadom od belog luka i terijakija, a jabuke su dinstane sa đumbirom i kineskim začinima, što stvara savršeno i sofisticirano yin-yang partnerstvo. Ove svinjske kotlete sa terijaki sosom je dovoljno jednostavno pripremiti bilo kojeg užurbanog utorka uveče, ali izgledaju dovoljno elegantno da se posluže gostima i na posebnoj subotnjoj večeri.",
      vreme: 60,
      kalorije: 315,
      link: <a href="https://www.youtube.com/watch?v=SIF7_CeTnWw&ab_channel=Lala%27sKitchen" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    },
    {
      id:6,
      naziv:"šKAMPI LO MEIN",
      slika: "https://bakeitwithlove.com/wp-content/uploads/2022/05/lo-mein-sq.jpg",
      opis:"Pozdravite se s jelom za poneti, jer sada možete napraviti autentična Lo Mein rezanca kod kuće za nekoliko minuta! Značaj ovog jednostavnog osnovnog recepta su jednostavan sezam soja sos i raznovrsno hrskavo i nežno povrće. Lo mein je savršen obrok za celu porodicu jer se lako prilagođava. Dodajte začine ili ne, i svoje omiljeno meso ili povrće i uživajte!",
      vreme: 15,
      kalorije: 490,
      link: <a href="https://www.youtube.com/watch?v=ofFHr93yLdc&ab_channel=SoupedUpRecipes" target="_blank" rel="noopener noreferrer">Pogledajte recept</a>,
      omiljen:0,
    }
  ])

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sviRecepti.length;i++){
      if(sviRecepti[i].id==id){
        sviRecepti[i].omiljen=1;
      }
    }
    var niz = sviRecepti.filter((rec)=>rec.omiljen==1);
    setOmiljeniR(niz);
  }

  function izbaci(id){
    for(var i=0;i<sviRecepti.length;i++){
      if(sviRecepti[i].id==id){
        sviRecepti[i].omiljen=0;
      }
    }
    var niz = sviRecepti.filter((rec)=>rec.omiljen==1);
    setOmiljeniR(niz);
  }

  return (
    <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/recepti" element={<Recepti  kriterijum={krterijumPretrage} recepti={sviRecepti} dodaj={dodaj}></Recepti>}></Route>
            <Route path="/omiljeni" element={<Omiljeni kriterijum={krterijumPretrage}  recepti={omiljeniR}  izbaci={izbaci}></Omiljeni>}></Route>
        </Routes>
     </BrowserRouter>
     <Footer> </Footer>
     <div className="kontejner">
    <CopyButton textToCopy={email}/> 
    <CopyButton textToCopy={telefon} />
    </div>

  </div>
  );
}

export default App