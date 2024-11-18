import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/BohdanHamela.jpg"} alt="Bohdan Hamela" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Bohdan Hamela</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>

     <div style={styles.card}>
        <img src={"/anastasiia_avatar.jpg"} alt="Anastasiia Adamovych" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Anastasiia Adamovych</h2>
          <p style={styles.position}>Project manager</p>
        </div>
      </div>

    <div style={styles.card}>
        <img src={"/ihor.jpg"} alt="Ihor Braichenko" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Ihor Braichenko</h2>
          <p style={styles.position}>Full-stack engineer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
