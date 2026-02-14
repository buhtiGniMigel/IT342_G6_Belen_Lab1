package com.lab1.Belen_IT342_G6_URA.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer profileID; // Matches int in ERD

    private Integer userID;
    private String firstname;
    private String lastname;

    // Getters and Setters
    public Integer getProfileID() { return profileID; }
    public void setProfileID(Integer profileID) { this.profileID = profileID; }
    public Integer getUserID() { return userID; }
    public void setUserID(Integer userID) { this.userID = userID; }
    public String getFirstname() { return firstname; }
    public void setFirstname(String firstname) { this.firstname = firstname; }
    public String getLastname() { return lastname; }
    public void setLastname(String lastname) { this.lastname = lastname; }
}