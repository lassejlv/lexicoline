import { FormEvent, useEffect } from 'react';
import ky from 'ky';
import styles from './index.module.scss';
import { useMutation } from '@tanstack/react-query';

function Spinner() {
  return <div className={styles.spinner}></div>;
}

const ApiUrl = 'https://api.dictionaryapi.dev/api/v2';

interface WordEntry {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl: string;
    license: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export default function Search() {
  const searchMutation = useMutation({
    mutationKey: ['search'],
    mutationFn: async (search: string) => {
      if (!search) return;
      await new Promise((resolve) => setTimeout(resolve, 500));
      return ky.get(`${ApiUrl}/entries/en/${search}`).json<WordEntry[]>();
    },
  });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get('search') as string;
    searchMutation.mutate(search);
  };

  useEffect(() => {
    console.log(searchMutation.data);
  }, [searchMutation.data]);

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit" disabled={searchMutation.isPending}>
          {searchMutation.isPending ? (
            <>
              <Spinner />
            </>
          ) : (
            'Search'
          )}
        </button>
      </form>

      {searchMutation.data && (
        <div className={styles.results}>
          {searchMutation.data.map((entry) => (
            <div key={entry.word} className={styles.entry}>
              <h2>{entry.word}</h2>
              <p>{entry.phonetic}</p>
              <ul>
                {entry.meanings.map((meaning) => (
                  <li key={meaning.partOfSpeech}>
                    <h3>{meaning.partOfSpeech}</h3>
                    <ul>
                      {meaning.definitions.map((definition) => (
                        <li key={definition.definition}>
                          <p>{definition.definition}</p>
                          {definition.synonyms.length > 0 && <p>Synonyms: {definition.synonyms.join(', ')}</p>}
                          {definition.antonyms.length > 0 && <p>Antonyms: {definition.antonyms.join(', ')}</p>}
                          {definition.example && <p>Example: {definition.example}</p>}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
