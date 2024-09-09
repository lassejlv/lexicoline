import styles from './index.module.scss';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About</h1>

      <div className={styles.card}>
        <p>
          Welcome to Lexiconline—your go-to online dictionary where the love for words meets the joy of learning! Born out of a deep passion
          for language, Lexiconline is more than just a dictionary; it’s a gateway to a world of endless discovery, where every word has a
          story to tell.
        </p>
        <p>
          At Lexiconline, we believe that language is a powerful tool that connects us, inspires creativity, and broadens our horizons.
          Whether you’re a student, a writer, or simply a lover of words, our mission is to provide you with a resource that not only
          defines words but also sparks curiosity and encourages a deeper understanding of the language we use every day.
        </p>
        <h2>Our Philosophy</h2>
        <p>
          Words are more than just a means of communication; they are the building blocks of knowledge and expression. That’s why
          Lexiconline is designed to be accessible, user-friendly, and, most importantly, completely free. We believe that learning should
          be a joyful and lifelong journey, and we're here to support you every step of the way
        </p>
        <h2>Why Lexiconline?</h2>
        <ul>
          <li>
            Completely Free: Lexiconline is a passion project created with the belief that knowledge should be accessible to everyone. There
            are no fees, no subscriptions—just pure learning, always at your fingertips
          </li>
          <li>
            Easy to Use: Our platform is designed with you in mind. Whether you’re searching for a word’s meaning, synonyms, or usage
            examples, you’ll find everything you need in one place, with a simple, intuitive interface
          </li>
          <li>
            Explore and Learn: Every word you look up is an opportunity to learn something new. We encourage you to explore the richness of
            language, expand your vocabulary, and discover the joy that comes from understanding and using new words.
          </li>
        </ul>
        <h2>A special thanks</h2>
        Without all the amazing work done at the people who made <a href="https://dictionaryapi.dev/">dictionaryapi.dev</a> none of this
        would have been possible. Their API is completely free for anyone to develop with and we encourage you to visit their site. So much
        so, that we have included a direct link to their site in the navigation on this site.
      </div>
    </div>
  );
}
