import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import "./viewfornisseur.css";


class Single extends Component  {
  constructor(props){
    super();
    this.state = {
        _id :"",
        RaisonSocial:"",
        NomEtPrenom:"",
        CIN:"",
        Matricule_fiscale:'',
        telephone:'',
        Lieu:'',
        DateDeConvention: new Date(),
        TypeDeProduit:'',
        Logo:'',
        Banque:'',
        RIB:'',
        Credit:''
      
      
    }
    
  }

  componentDidMount(){
  
    var url_string = window.location.href;
    console.log(url_string)
  
    var url = new URL(url_string);
    var c = url.searchParams.get('_id');
    console.log(c);

    axios.get("http://localhost:3002/api/fornisseurs/"+c)
    .then(res => {
      
        this.setState({
            _id: c,
            RaisonSocial: res.data.RaisonSocial,
            NomEtPrenom: res.data.NomEtPrenom,
            CIN: res.data.CIN,
            Matricule_fiscale: res.data.Matricule_fiscale,
            telephone: res.data.telephone,
            Lieu: res.data.Lieu,
            DateDeConvention: new Date(res.data.DateDeConvention),
            TypeDeProduit: res.data.TypeDeProduit,
            Logo: res.data.Logo,
            Banque: res.data.Banque,
            RIB: res.data.RIB,
            Credit: res.data.Credit,
        })
        console.log(this.state)
    })
    .catch(function (error){
        console.log(error);
    })     
  }


render() {

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"></h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={`http://localhost:3002/uploads/${this.state.Logo}`}
              
              alt="image mathamech"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{this.state.RaisonSocial}</span>
              <span className="userShowUserTitle">{this.state.NomEtPrenom}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Single;
