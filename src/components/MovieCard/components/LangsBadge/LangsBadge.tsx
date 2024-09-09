import './LangsBadge.scss';


interface DataLangs {
  [key: string]: {
    flagUrl: string;
    code: string;
  };
}

const languages: DataLangs = {
  'es': {
    flagUrl: '/images/lang/spanish.svg',
    code: 'ES'
  },
  'en': {
    flagUrl: '/images/lang/english.svg',
    code: 'EN'
  },
  'fr': {
    flagUrl: '/images/lang/french.svg',
    code: 'FR'
  },
  'jp': {
    flagUrl: '/images/lang/japanese.svg',
    code: 'JP'
  },
};

interface propsInterface {
  langs: string[];
}

export default function LangsBadge(props: propsInterface) {
  return (
    <ul className='langs-badge'>
      {
        props.langs.map((e, index) => <FlagText key={index} code={e} />)
      }
    </ul>
  );
}

function FlagText({ code }: { code: string }) {
  return (
    <li className='lang-badge'>
      <div className='lang-badge__flag'>
        <img src={languages[code].flagUrl} />
      </div>
      <div className='lang-badge__text'>{languages[code].code}</div>
    </li>
  );
}