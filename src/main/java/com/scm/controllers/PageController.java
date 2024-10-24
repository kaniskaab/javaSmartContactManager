package com.scm.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class PageController {
    @RequestMapping("/home")
    public String home(Model model){
        System.out.println("Home page handler");
        // sending data to view
        model.addAttribute("name", "Substring Technologies");
        model.addAttribute("new", "I am testing");
        model.addAttribute("link", "https://www.google.com/");
        return "home";
    }


    //about routes

    @RequestMapping("/about")
public String aboutPage(Model model){
    model.addAttribute("isLogin", false);
    System.out.println("About Page Loading");
    return "about";
}

@RequestMapping("/services")
public String servicesPage(){
    System.out.println("Services Page Loading");
    return "services";
}
}


//services routes