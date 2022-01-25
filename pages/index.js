import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'
import React from 'react'

function GlobalStyle() {
  return (
    <style global jsx>
      {`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */
      `}
    </style>
  )
}

function Title(props) {
  const Tag = props.tag
  return (
    <div>
      <GlobalStyle />
      <Tag>{props.children}</Tag>
    </div>
  )
}

function Index() {
  const [username, setUsername] = React.useState('')

  return (
    <>
      <GlobalStyle/>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['050'],
          backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2017%2F04%2Fcat-10.jpg&f=1&nofb=1)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals['200'],
            opacity: 1,
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: {xs: '100%', sm: '50%'}, textAlign: 'center', marginBottom: '32px', opacity: 1,
            }}
          >
            <Title tag="h2">Miau! 🐱</Title>
            <Text variant="body3" styleSheet={{marginBottom: '32px', color: appConfig.theme.colors.neutrals[400]}}>
              {appConfig.name}
            </Text>

            <TextField
               placeholder='Insira seu usuario do GitHub'
               value={username}
               onChange={function (event){
                  const textValue = event.target.value;
                  setUsername(textValue)
               }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[250],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[500],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[250],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png` === `https://github.com/.png` ? `https://cdn0.iconfinder.com/data/icons/black-cat-emoticon-filled/64/cute_cat_kitten_face_per_avatar-02-512.png` : `https://github.com/${username}.png` }
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

export default Index