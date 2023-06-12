import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const handlePhotoClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  const photos = [
    {
      title: "Book Online Appointment",
      imageUrl:
        "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png",
      width: 300,
      height: 200,
    },
    {
      title: "Review Your Dosage and Prescription",
      imageUrl:
        "https://assets-us-01.kc-usercontent.com/ffacfe7d-10b6-0083-2632-604077fd4eca/545ff485-302d-4798-9898-3b41de409ba9/Older-Woman-Medicine-Cabinet-Twitter_150684340_2020-12_1024x512.jpg",
      width: 300,
      height: 200,
    },
    {
      title: "Assesories: Abhi Tho me javan hu",
      imageUrl:
        "https://img.freepik.com/free-vector/aging-people-accessories-flat-icons-set_1284-10259.jpg?w=740&t=st=1686579118~exp=1686579718~hmac=ef90f60bc84386c66f0687548d9005356db976d789fdfea5c640af01ca3c6477",
      width: 300,
      height: 200,
    },
  ];

  return (
    <div style={styles.homepage}>
      <Header />
      <h1 style={styles.title}>
        <b>Welcome to Old Age Astra</b>
      </h1>
      <p style={styles.description}>
        <b>Here You Get everything you desire for Happy Second Innings</b>
      </p>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-card"
            onClick={() => handlePhotoClick(photo.title)}
          >
            <img src={photo.imageUrl} alt={photo.title} className="photo" />
            <h3 className="photo-title">{photo.title}</h3>
          </div>
        ))}
      </div>
      <button style={styles.ctaButton}>Get Started</button>
      <Footer />
    </div>
  );
};

const styles = {
  homepage: {
    textAlign: "center",
    padding: "20px",
    backgroundImage:
      "url('https://images.pexels.com/photos/1652340/pexels-photo-1652340.jpeg?cs=srgb&dl=pexels-hasan-albari-1652340.jpg&fm=jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontSize: "32px",
    color: "#333",
    height: "50px",
    textAlign: "center",
    marginBottom: "10px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1614851099362-9adf73ccebe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
    backgroundSize: "cover",
  },
  description: {
    fontSize: "24px",
    color: "white",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "10px 20px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
    border: "2px",
  },
  photoCard: {
    width: "200px",
    margin: "10px",
    cursor: "pointer",
    textAlign: "left",
  },
  photo: {
    width: "100%",
    height: "150px",
    ObjectFit: "cover",
    borderRadius: "5px",
  },
  photoTitle: {
    fontSize: "28px",
    color: "#fff",
    marginTop: "10px",
  },
};

export default HomePage;
