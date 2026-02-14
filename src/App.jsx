
import Entry from "./component/Entry.jsx";
import Header from "./component/Header.jsx";
import mountEverest from "./assets/mountEverest.png"; 
import mountFuji from "./assets/mountFuji.png";
import waterfall from "./assets/waterfall.png";
import desert from "./assets/desert.png";    

function App() {
  return (
  <div className= "Journal">
    
   <Header></Header>
   
      {/* //entry 1 */}
      <Entry
       image={{src:mountEverest,alt:"mount everest"}}
       topDetail={{country:"Nepal",
         mapLink:"https://www.google.com/maps/place/Mt+Everest/@27.9881503,86.8841669,13z/data=!3m1!4b1!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881569!4d86.9253667!16zL20vMGJsYmQ?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
       }}
       title="Mount Everest"
       dates ="12 july, 2025 - 14 Oct, 2021"
       textInfo ="Mount Everest is the tallest mountain in World, standing at 8848.86 meters (30,000feet). Mount Everest is the single most popular tourist site in world, for both Neplease and foreign tourists."
      />

    {/* //entry 2 */}
   <Entry
    image={{src:mountFuji,alt:"mount fuji"}}
    topDetail={{country:"japan",
      mapLink:"https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
    }}
    title="Mount Fuji"
    dates ="12 Jan, 2021 - 24 Jan, 2021"
    textInfo ="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
   />


   {/* //entry 3 */}
   <Entry
    image={{src:waterfall,alt:"Iguazu Waterfall"}}
    topDetail={{country:"Argentina-Brazil Border",
      mapLink:"https://www.google.com/maps/place/Igua%C3%A7u+National+Park/@-25.5715796,-54.7923267,9z/data=!4m10!1m2!2m1!1siguazu+falls+brazil!3m6!1s0x94f14d6db34e243d:0x6e633cd35854aa8f!8m2!3d-25.460508!4d-53.8177841!15sChNpZ3VhenUgZmFsbHMgYnJhemlsWhUiE2lndWF6dSBmYWxscyBicmF6aWySAQ1uYXRpb25hbF9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJLTnpodU1USkJSUkFC4AEA-gEECB4QSg!16zL20vMDRqMjVn?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
    }}
    title="Iguazu Waterfall"
    dates ="12 feb, 2025 - 14 august, 2021"
    textInfo ="Iguazú Falls or Iguaçu Falls[note 1] are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world.[2] The falls divide the river into the upper and lower Iguazu."
   />
   

   {/* //entry  4*/}
   <Entry
    image={{src:desert,alt:"Grand Canyon"}}
    topDetail={{country:"USA ",
      mapLink:"https://www.google.com/maps/place/Grand+Canyon/@36.0997631,-112.1124846,3a,84.3y,90t/data=!3m8!1e2!3m6!1sCIABIhBRtSpKDnzSOyhi4p-eVITv!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSxkUi7ifurGOUwR_EPl-9j8Xre8sga3YJ7o19ujgNBP5LPIglp7r85M6O8CMxmgJ-wEW7aw8l494h506a4PUNSUYT0cIqz1uuGYYAIQMMds8M2KKyYnzDll9BZVvfEuEBdC0M7LEWt0kN9E%3Dw203-h135-k-no!7i612!8i408!4m9!3m8!1s0x80cc0654bd27e08d:0xb1c2554442d42e8d!8m2!3d36.0997631!4d-112.1124846!10e5!14m1!1BChAqDC9nLzExY2Zmd3JocjAL!16zL20vMGNuczU?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
    }}
    title="Grand Canyon "
    dates ="12 march, 2025 - 14 december, 2021"
    textInfo ="The Grand Canyon is a breathtaking natural wonder carved by the Colorado River, showcasing two billion years of geological history. Stretching 277 miles long and over a mile deep, its colorful rock layers create mesmerizing vistas.."
   />
   


  </div>
  )
}

export default App
