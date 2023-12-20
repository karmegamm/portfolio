import {FaFacebookSquare,FaLinkedin,FaInstagram  } from "react-icons/fa";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import graduate from '../src/assets/graduation.svg';
import code from '../src/assets/code.svg';
import certificate from '../src/assets/certificate.svg';
import LeetCode  from '../src/assets/leetcode.svg';
import  tools from '../src/assets/tools.svg';
import projects from '../src/assets/projects.svg'
import C from '../src/assets/skills/c.svg'
import Cplus from '../src/assets/skills/c++.svg'
import Csharp from '../src/assets/skills/csharp.svg'
import Docker from '../src/assets/skills/docker.svg'
import Firebase from '../src/assets/skills/firebase.svg'
import Git from '../src/assets/skills/git.svg'
import Github from '../src/assets/skills/github.svg'
import Java from '../src/assets/skills/java.svg'
import Js from '../src/assets/skills/javascript.svg'
import Linux from '../src/assets/skills/linux.svg'
import Dotnet from '../src/assets/skills/dotnet.svg'
import Mongodb from '../src/assets/skills/mongodb.svg'
import Mysql from '../src/assets/skills/mysql.svg'
import Node from '../src/assets/skills/node-js.svg'
import Oracle from '../src/assets/skills/oracle.svg'
import Php from '../src/assets/skills/php.svg'
import Postman from '../src/assets/skills/postman.svg'
import ReactIcon from '../src/assets/skills/react.svg'
import ReactNative from '../src/assets/skills/reactnative.svg'
import Vite from '../src/assets/skills/vite.svg'
import Windows from '../src/assets/skills/windows.svg'
import Android from '../src/assets/skills/android.svg'
import Python from '../src/assets/skills/python.svg'
import Express from '../src/assets/skills/express.svg'
import Spring from '../src/assets/skills/springboot.svg'
import Nginx from '../src/assets/skills/nginx.svg'
import Xampp from '../src/assets/skills/xampp.svg'


export const social= [
    {
        name:'mail',
        href:"mailto:karmegam232734@gmail.com",
        icon:<BsFillEnvelopeAtFill/>
    },
    {
        name:'linkedIn',
        href:"https://www.linkedin.com/in/karmegamm/",
        icon:<FaLinkedin/>
    },
    {
        name:'github',
        href:"https://github.com/karmegamm",
        icon:<FaGithub/>
    },
    {
        name:'facebook',
        href:"https://www.facebook.com/profile.php?id=100087293084309&mibextid=ZbWKwL",
        icon:<FaFacebookSquare/>
    },
    {
        name:'instagram',
        href:"https://www.instagram.com/ganeshmaran_143",
        icon:<FaInstagram/>
    },
]

export const countDetails =[
    {
        first :'Years Of',
        second:'Education',
        value:13,
        img:graduate
    },
    {
        first :'Programming ',
        second:'Languages',
        value:8,
        img:code
    },
    {
        first :'Certifications',
        second:'',
        value:10,
        img:certificate
    },
    {
        first :'Projects',
        second:'Completion',
        value:3,
        img:projects
    },   
    {
        first :'Problems On ',
        second:'LeetCode',
        value:70,
        img:LeetCode
    },
    {
        first :'Tools',
        second:'',
        value:27,
        img:tools
    },
]

export const skills ={
    program:{
        heading:'Programming Languages',
        icons:[C,Cplus,Csharp,Java,Python,Js,Php]
    },
    libraries:{
        heading:'Frameworks && Libraries ',
        icons:[ReactIcon,Node,Express,Spring,ReactNative,Dotnet,Firebase]
    },    
    dataBases:{
        heading:'DataBases',
        icons:[Mongodb,Mysql,Oracle]
        
    },
    others:{
        heading:'Others',
        icons:[Linux,Windows,Android,Git,Github,Docker,Postman,Vite,Nginx,Xampp]
    }
}

export let aboutDescription = ["Greetings !✨,I'm Karmegam M,👣 born on December 23, 2003, and I've embarked on an exciting tech journey. Armed with a 🎓 BSc in Computer Science from ANJAC College 🏫, Sivakasi, I've been on a quest to innovate and create. I proudly co-founded 👑UNIJAC TECHNOLOGIES, a student-led startup, where I serve as a developer, pushing the boundaries of technology.      ","I owe my determination and passion to my parents,👨‍👩‍👧‍👧 Marimuthu and Vasuki, who have been unwavering pillars of support. With every project I take on, I aim to revolutionize the tech landscape. My portfolio showcases my dedication, creativity, and commitment to making a significant impact in the world of technology💻. Explore it to witness the 🌎journey and discover the exciting projects I've been a part of."]