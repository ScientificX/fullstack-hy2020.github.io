import { Banner } from '../Banner/Banner';
import { ContentLiftup } from '../ContentLiftup/ContentLiftup';
import React from 'react';
import navigation from '../../content/partnavigation/partnavigation';

export const PartBanner = ({ lang }) => {
  const parts = Object.keys(navigation[lang]);

  return (
    <Banner
      className="spacing spacing--after-small spacing--after-mobile offset"
      id="course-contents"
    >
      <div className="container spacing flex-fix-aligning col-7--mobile">
        {parts.map(part => {
          const partNames =
            lang === 'en'
              ? [
                  'Fundamentals of Web apps',
                  'Introduction to React',
                  'Communicating with server',
                  'Programming a server with NodeJS and Express',
                  'Testing Express servers, user administration',
                  'Testing React apps',
                  'State management with Redux',
                  'React router, custom hooks, styling app with CSS and webpack',
                  'GraphQL',
                  'Typescript'
                ]
              : [
                  'Web-sovellusten toiminnan perusteet',
                  'Reactin perusteet',
                  'Palvelimen kanssa tapahtuva kommunikointi',
                  'Palvelimen ohjelmointi NodeJS:n Express-kirjastolla',
                  'Express-sovellusten testaaminen, käyttäjänhallinta',
                  'React-sovelluksen testaaminen',
                  'Sovelluksen tilan hallinta Redux-kirjastolla',
                  'React router, custom-hookit, tyylikirjastot ja webpack',
                  'GraphQL',
                  'Typescript'
                ];

          return (
            <ContentLiftup
              key={partNames[part]}
              className="col-3 col-10--mobile col-4--tablet"
              image={{
                src: require(`../../images/thumbnails/part-${part}.svg`),
                alt: partNames[part],
              }}
              hoverImageSrc={require(`../../images/thumbnails/part-${part}_ovr.svg`)}
              name={`${lang === 'en' ? 'Part' : 'Osa'} ${part}`}
              summary={partNames[part]}
              path={lang === 'en' ? `/en/part${part}` : `/osa${part}`}
            />
          );
        })}
      </div>
    </Banner>
  );
};
