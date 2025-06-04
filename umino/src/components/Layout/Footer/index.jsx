import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className="mx-[30px] mb-[30px] rounded-[20px] pt-[100px]  overflow-hidden bg-[#111111]">
      <div className="container grid 2xl:grid-cols-12 grid-cols-2  mx-auto px-[55px] pt-[21px] pb-[100px] justify-between font-[jost]">
        <div className="left grid col-span-4">
          <div className="logo mb-[30px] w-[90px]">
            <img
              src="	https://umino-demo.myshopify.com/cdn/shop/files/logo-white.png?v=1682650895"
              alt=""
            />
          </div>
          <p className="text-[#999999] leading-[2] text-[16px] mb-[30px]">
            268 St, South New York/NY 98944, United States. <br />+222-1800-2628 <br />
            blueskytechcompany@gmail.com
          </p>
          <div className="social flex gap-3">
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <TiSocialInstagram fill="#999999"/>

            </div>
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <FaTiktok 
 fill="#999999"/>

            </div>
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <TiSocialYoutube fill="#999999"/>

            </div>
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <FaXTwitter fill="#999999"/>

            </div>
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <TiSocialFacebook fill="#999999"/>

            </div>
            <div className="icons border-[1px] inline-block p-2 border-[#999999] rounded-full">
              <FaPinterest
 fill="#999999"/>

            </div>
          </div>
        </div>
        <div className="category grid 2xl:col-span-2 col-span-12">
          {" "}
          <Accordion sx={{ backgroundColor: "#111111", color: "white" }}>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Typography component="span" sx={{fontSize:"14px", fontWeight:"600"}} >HOT CATEGORIES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="sesrvice grid 2xl:col-span-2 col-span-12">
          <Accordion sx={{ backgroundColor: "#111111", color: "white" }}>
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography component="span" sx={{fontSize:"14px", fontWeight:"600"}}>CUSTOMER SERVICE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="newsletter grid 2xl:col-span-4 col-span-12">
          <Accordion sx={{ backgroundColor: "#111111", color: "white" }}>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              <Typography component="span" sx={{fontSize:"14px", fontWeight:"600"}}>SIGN UP TO NEWSLETTER</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="container mx-auto px-[55px]">
        <div className=" justify-between font-[jost] border-t-[1px] border-t-[#333333] py-[30px]">
        <div className="flex 2xl:flex-row flex-col 2xl:justify-between items-center">
          <div className="left text-[#999999]">
            © 2024 Umino Store. All Rights Reserved
          </div>
          <div className="right">
            <img className="max-w-[331px]" src="			https://umino-demo.myshopify.com/cdn/shop/files/payment_c1.png?v=1681894163&width=533" alt="" />
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
