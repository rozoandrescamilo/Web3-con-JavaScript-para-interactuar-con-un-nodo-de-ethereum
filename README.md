[![1](https://github.com/rozoandrescamilo/Smart-Contract-para-consultar-estados-de-una-Purchase-Order/blob/main/img/1.jpg?raw=true "1")](https://github.com/Smart-Contract-para-consultar-estados-de-una-Purchase-Order/blob/main/img/1.jpg?raw=true "1")

- [Web3 con JavaScript para interactuar con un nodo de ethereum](#web3-con-javaScript-para-interactuar-con-un-nodo-de-ethereum)
  - [¿Que es Web3?](#¿que-es-web3?)
    - [Versiones anteriores de la web](#versiones-anteriores-de-la-web)
    - [Blockchain](#blockchain)
    - [Descentralización](#descentralización)
    - [Aplicaciones de la Web3](#aplicaciones-de-la-web3)
  - [Web3.js](#web3.js)
    - [Web3 Stack](#web3-stack)
    - [Prueba de conexión con un nodo de ethereum](#prueba-de-conexión-con-un-nodo-de-ethereum)
  - [Retos para la Web3](#retos-para-la-web3)

# Web3 con JavaScript para interactuar con un nodo de ethereum

## ¿Que es Web 3?

La Web 3.0 es considerada como la tercera generación de internet y se ha caracterizado por ser una estructura más segura y libre. Esta nueva versión de la web se construye utilizando blockchain y promete un tipo de servicio de internet mucho más avanzado, que utiliza tecnologías como cadenas de bloques descentralizadas, criptomonedas y NFT para devolver el control a los usuarios en términos de propiedad. La Web3 es un modelo en el que los usuarios deben ser dueños de activos digitales para participar.

Esta nueva generación de internet promete revolucionar la forma en que interactuamos con la web, cómo se comparte y accede a la información. Además, la Web3 también ofrece una mayor seguridad y privacidad de los datos de los usuarios, lo que resulta en una experiencia más segura y confiable. La Web3 es un modelo en el que los usuarios deben ser dueños de activos digitales para participar.

### Versiones anteriores de la web

[![1](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/1.jpg?raw=true "1")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/1.jpg?raw=true "1")

#### Web 1

La Web1, también conocida como Web 1.0, es la primera generación de internet que surgió entre 1989 y 1990, Tim Berners-Lee desarrolló la **WWW - World Wide Web**, mientras trabajaba en el SERN en Suiza. Fue allí donde se crearon el primer servidor web y el primer navegador web del mundo, sentando las bases para la primera versión de la web. En este momento, la web era una herramienta innovadora que cobró gran importancia en el mundo con los primeros portales y sitios web estáticos.

#### Web2

La Web2, por otro lado, es la segunda generación de internet que se caracteriza por una web más dinámica y participativa. Se centró en la creación de redes sociales, blogs y sitios web con contenido generado por los usuarios. La Web2 también se basa en la centralización, con autoridades y guardianes que desempeñan funciones como los motores de búsqueda y las plataformas de redes sociales. Gracias a eso hubo un crecimiento exponencial para grandes compañías. Por ejemplo:

- Amazon: Inició como una tienda de libros y llegó a ser a la plataforma de comercio electrónico más poderosa.

- YouTube: Pasó de tener simples videos a tener influencers que ganan miles de millones de dólares al impactar la vida de personas en todo el mundo.

- Facebook: Era una plataforma para tener un perfil universitario y ver fotografías y se convirtió en todo un ecosistema de información, noticias y comercio.

**Inconvenientes de la Web 2:**
A pesar de que la interactividad y globalización permitió que muchas personas tuvieran oportunidades de surgir y crear negocios en internet, existen algunos problemas con la Web2, por ejemplo:

- El poder está concentrado en pocas manos. Las corporaciones, dueñas de las plataformas, las rentan a los usuarios, pero los usuarios realmente no tienen voto en la toma de decisiones o las reglas del juego de aquello que usan todos los días.

- Las compañías toman ventaja de los datos de los usuarios. Todo el tiempo las personas están generando una infinita cantidad de datos y compartiéndola en la web. Al hacer esto, las compañías toman esta información valiosa y pueden analizar el comportamiento de consumo, las tendencias políticas, etc. Esto se traduce en problemas de: Privacidad, Manipulación e Inseguridad.

### Blockchain

Blockchain es una tecnología de libro mayor compartido e inmutable que facilita el registro y seguimiento de transacciones y activos en una red de negocios. Este libro mayor es ideal para obtener información inmediata, compartida y completamente transparente, accesible solo a los miembros autorizados de la red. Blockchain es una tecnología que permite agilizar transacciones complejas a través de técnicas criptográficas.

En resumen, blockchain es una tecnología que puede revolucionar los negocios al proporcionar una manera segura, transparente y eficiente de registrar y seguir transacciones y activos.

Existe un gran número de blockchains en las cuales puedes construir. No hay una que sea la mejor, sino que cada una tiene sus propias características y ecosistema. En el estado actual del ecosistema, el mejor lugar para iniciar puede ser aprendiendo de Solidity, Ethereum y la Ethereum Virtual Machine (EVM).

Solidity te permite comenzar a desarrollar no solo para Ethereum, sino también para soluciones de capa 2 o sidechains como Polygon y Optimism, además de otras blockchains compatibles con la EVM como Avalanche, Celo, entre otras.

Otra opción con gran popularidad es Rust. Este lenguaje es utilizado en blockchains como Solana, NEAR y Polkadot.

### Descentralización

Un sistema descentralizado no depende de ningún ente central y permite que cualquier persona puede participar en la red. La descentralización resuelve muchos de los problemas de la Web 2, como:

- Censura
- Mal manejo de los datos personales
- Propiedad digital
- Visibilidad

Además, con la descentralización se potencian distintos estilos de economías como:

- Economía creativa: la descentralización permite a los creadores digitales tener mayor control sobre sus productos.
- Economía en comunidad: se prioriza la comunidad y a su potencial a través de sistemas de votación y de organización basados en la tecnología Blockchain.

**Creación de apps descentralizadas:** Con la Web 2, las aplicaciones residen en el servidor de alguien más. Pero la descentralización de la Web3 permite crear apps que no están ligadas a un solo servidor, se llaman DApps o Aplicaciones Descentralizadas. Una de las plataformas Blockchain que hace esto realidad es Ethereum.

Ethereum es una Blockchain programable, una red global que permite la ejecución de aplicaciones financieras y de otros tipos. Al crear una app aquí, esta será resistente a la censura, será anónima y tendrá una alta disponibilidad al tener muchos puntos de fallo.

**Ecosistema de Ethereum:** Al utilizar Smart Contracts y Dapps, Ethereum ha permitido la creación de todo un ecosistema de aplicaciones, servicios y activos digitales, categorizados en tres grupos: DeFi, NFTs y DAOs.

- DeFi: finanzas descentralizadas
- NFT: tokens no fungibles
- DAO: organizaciones descentralizadas autónomas

### Aplicaciones de la Web3

- **Las finanzas descentralizadas o DeFi:** Son un conjunto de instrumentos que, a través de tecnologías de la Web3, forman un ecosistema mayor y emulan a los instrumentos financieros con lo que contamos hoy en día a través de los bancos. La principal característica de las DeFi es que funcionan a través de Smart Contracts en la Blockchain, permitiendo visibilidad y transparencia que no podemos encontrar en el sistema financiero tradicional.

En el sistema financiero actual no hay posibilidad de comprobar los libros de todos los bancos y se debe confiar en que las instituciones financieras reporten los datos y que estos sean reales. Opuesto a esto, en DeFi, no hay necesidad de confiar, los datos están allí y son públicos y transparentes. Mediante Smart Contracts todas las transacciones son visibles en la Blockchain y podemos asegurarnos de lo que sucede.

- **Tokens no fungibles o NFT:** Un elemento no fungible es algo que es único e irrepetible. Así se haga una réplica del elemento inicial, no tendrá el mismo valor que el objeto original. Con la tecnología Blockchain, los NFT resuelven el problema de la replicación digital e identificación del archivo original o la autenticidad de objetos digitales.

Los NFT posibilitan la existencia de representaciones de los objetos digitales que puedan diferenciarse de otros, garantizan originalidad, aseguran pertenencia al poseedor del token, permiten asociar un objeto digital de fácil reproducción a un token único en la Blockchain y facultan la existencia de activos digitales únicos, comprobables y transferibles.

- **Decentralized Autonomous Organizations o DAO:** En las organizaciones descentralizadas autónomas o DAO la jerarquía es reemplazada por reglas escritas en Smart Contracts y las decisiones se toman votando en la Blockchain. En otras palabras, las DAO son máquinas de incentivos automatizadas, por medio de las cuales se expresa un objetivo y se premia a quienes colaboren en pro de este objetivo.

Las decisiones se toman en comunidad por medio de procesos de votación. Quienes votan son las personas que participan en la DAO y poseen tokens que les permiten operar los Smart Contracts. Al manejar un fondo compartido con DAO, este se asegura con multifirma, un mecanismo que únicamente permite mover los fondos si la transacción es firmada por dos o más billeteras. Con los Smart Contracts también se pueden publicar mociones y los miembros de la organización pueden votar a favor o en contra de ellas.

## Web3.js

Web3.js es una colección de bibliotecas de JavaScript, que permite interactuar con un nodo de Ethereum mediante HTTP, IPC o WebSocket. La tecnología de Web3.js se conecta con el blockchain de Ethereum mediante JSON RPC (llamada a procedimiento remoto). Web3.js es una herramienta útil para los desarrolladores de aplicaciones descentralizadas (dapps) que buscan interaccionar con Ethereum.

Al utilizar Web3.js, es posible interactuar con contratos inteligentes como objetos de JavaScript, suscribirse a eventos específicos en la cadena, interactuar con el Servicio de Nombres de Ethereum, y obtener información sobre bloques y estados de los nodos de Ethereum. Además, permite importar solo los paquetes necesarios para cada proyecto.

Página oficial de Web3.js: [https://web3js.org/#/](https://web3js.org/#/ "https://web3js.org/#/")

Documentación Web3.js - Ethereum JavaScript API: [https://web3js.readthedocs.io/en/v1.7.5/](https://web3js.readthedocs.io/en/v1.7.5/ "https://web3js.readthedocs.io/en/v1.7.5/")

Repositorio Web3.js: [https://github.com/web3/web3.js](https://github.com/web3/web3.js "https://github.com/web3/web3.js")

### Web3 Stack

[![1](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/1.png?raw=true "1")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/1.png?raw=true "1")

Al construir una app se suele contar con un conjunto de servicios y herramientas que se usan para hacer el trabajo y lograr que la app funcione, a este conjunto se le conoce como stack. Para la mayoría de las aplicaciones tradicionales o lo que se llama web2 los componentes necesarios son:

- API (REST or GraphQL)
- Capa de autenticación
- Base de datos
- Client-side (frontend) frameworks y librerías
- Almacenamiento de archivos

En web3, en cambio, las cosas no son iguales, dado que representa un paradigma totalmente distinto y el ecosistema aún está en una fase inicial y en constante evolución.

Las aplicaciones descentralizadas tienen características propias, como por ejemplo:

- Infraestructura distribuida, confiable y robusta.
- Propiedad de los datos, contenido y plataformas.
- Pagos digitales nativos.
- Identidad auto-soberana.
- Backend abierto, público y reutilizable.

Teniendo en cuenta esta características el web3 stack se puede dividir en las siguientes categorías.

1. **Blockchain**
Existe un gran número de blockchains en las cuales puedes construir. No hay una que sea la mejor, sino que cada una tiene sus propias características y ecosistema. En el estado actual del ecosistema, el mejor lugar para iniciar puede ser aprendiendo de Solidity, Ethereum y la Ethereum Virtual Machine (EVM).

Solidity te permite comenzar a desarrollar no solo para Ethereum, sino también para soluciones de capa 2 o sidechains como Polygon y Optimism, además de otras blockchains compatibles con la EVM como Avalanche, Celo, entre otras.

Otra opción con gran popularidad es Rust. Este lenguaje es utilizado en blockchains como Solana, NEAR y Polkadot.

2. **Ambientes de desarrollo para blockchain**
Para el ecosistema de Ethereum y la EVM existen diversos ambientes de desarrollo que puedes utilizar.

- Hardhat: una de las herramientas con mayor popularidad y adopción en los tiempos recientes debido a su fácil uso. Tiene como base JavaScript.
- Truffle: otra opción basada en JavaScript y también favorita de algunos desarrolladores debido a que tiene más tiempo en funcionamiento y ha demostrado funcionar bastante bien.
- Foundry: una opción más reciente, escrita en Rust, y que promete ser una gran herramienta.
- Brownie: ambiente de desarrollo basado en Python.

Por otro lado, el ecosistema de Solana es muy solicitado, una buena opción de ambiente de desarrollo es Anchor. Anchor ofrece las herramientas necesarias para construir, desplegar y hacer testing de programas para Solana.

3. **Almacenamiento de archivos**
Almacenar archivos grandes on-chain puede ser costoso y no suele ser la mejor opción. En cambio, existen protocolos que nos permiten hacer este almacenamiento de datos.

- IPFS: protocolo P2P con gran popularidad en el ecosistema y buena documentación.
- Arweave: útil para almacenar datos de forma permanente.
- Filecoin: protocolo de almacenamiento descentralizada, puede utilizarse a través de servicios como web3.storage
- Skynet

Otros protocolos de datos off-chain (o fuera de la cadena -blockchain-). Otras opciones que te permiten almacenar datos de forma off-chain son:

- Ceramic Network
- Textile ThreadDB
- GunDB

4. **API (indexing y querying)**
La forma en que una aplicación interactúa con blockchain es muy diferente a como lo haría con una base de datos tradicional. La mayoría de las blockchains están optimizadas para operaciones de escritura, pero leer su información, en cambio, es un poco complicado.

En una aplicación tradicional cuentas con una base de datos con información indexada y organizada de manera eficiente para poder ordenar, filtrar, hacer búsquedas y otros tipos de consultas.

En web3 no puedes hacer esto directamente desde la blockchain, pero sí desde un protocolo especifico para esto: The Graph. Este protocolo te permite indexar y hacer consultas, además de construir APIs, llamadas subgraphs, a partir de los datos de blockchain para facilitar su consumo.

5. **Identidad**
En web3, el paradigma es totalmente distinto, la identidad se define en relación con el concepto de wallets o billeteras. Para un usuario de cripto su billetera es una llave -criptográfica- que le da acceso a blockchain.

Como desarrollador debes aprender cómo interactuar con la billetera del usuario, así como solicitar acceso para firmar transacciones hacia blockchain.

Para aplicaciones web y si el usuario tiene instalada la extensión de navegador de alguna billetera puedes encontrar el elemento dentro del contexto del navegador como window.ethereum o window.solana dependiendo de la blockchain.

6. **Client-side (frontend) frameworks y librerías**
Para la creación de un frontend la mayoría de los frameworks y/o librerías de JavaScript son compatibles con las herramientas de desarrollo blockchain. Aún así gran parte de los proyectos están desarrollados con React.

Entre las librerías más usadas para interactuar con Ethereum se encuentran web3.js y ethers.js.

En Solana puedes usar Solana-Web3.js o Anchor. Anchor es el que ha tenido más adopción recientemente.

7. **Oráculos**
Los oráculos permiten a los desarrolladores acceder para leer datos del mundo real y sistemas externos desde un contrato inteligente.

Por ejemplo, la mayoría de las aplicaciones financieras requieren conocimiento de datos y eventos del mundo real que ocurren fuera de la cadena, por lo que los oráculos son especialmente importantes en DeFi.

Chainlink permite el acceso a datos del mundo real y computación fuera de la cadena mientras mantiene las garantías de seguridad y confiabilidad inherentes a la tecnología blockchain.

Flux es otro oráculo que proporciona contratos inteligentes con acceso a fuentes de datos económicamente seguras.

### Prueba de conexión con un nodo de ethereum

Se realizara una prueba para conectarse con un nodo de ethereum y hacer llamado JSON RPC a través de librería Web3.js. Para esto es necesario tener una cuenta de Infura [https://app.infura.io/](https://app.infura.io/ "https://app.infura.io/") y extraer el project ID y un endpoint de la red de ethereum.

[![2](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/2.png?raw=true "2")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/2.png?raw=true "2")

[![3](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/3.png?raw=true "3")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/3.png?raw=true "3")

Se utilizara la plataforma Replit [https://replit.com/](https://replit.com/ "https://replit.com/") donde se pueden crear ambientes de trabajo facilmente, se rea la cuenta y se crea un nuevo ambiente con una plantilla para Node.js:

[![4](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/4.png?raw=true "4")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/4.png?raw=true "4")

[![5](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/5.png?raw=true "5")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/5.png?raw=true "5")

En la sección de Packages se busca "Web3 - Ethereum Javascript API" y se instalará en la terminal del entorno de trabajo de Replit:

[![6](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/6.png?raw=true "6")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/6.png?raw=true "6")

Para esta prueba se tendra en uso la sublibrería **web3.eth** [https://web3js.readthedocs.io/en/v1.7.5/web3-eth.html](https://web3js.readthedocs.io/en/v1.7.5/web3-eth.html "https://web3js.readthedocs.io/en/v1.7.5/web3-eth.html") para interactuar con una blockchain de Ethereum y contratos inteligentes de Ethereum.

[![8](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/8.png?raw=true "8")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/8.png?raw=true "8")

La librería Web3.js es una colección de módulos que contienen funcionalidad para el ecosistema ethereum. Esta compuesta por:

- web3-eth es para interactuar con la blockchain ethereum y los smart contracts
- web3-shh es para interactuar con el protocolo whisper y comunicar p2p y broadcast
- web3-bzz es para el protocolo swarm, el guardado de archivos descentralizado
- web3-utils contiene funciones “helper” (de ayuda) para desarrolladores de Dapps

[![7](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/7.png?raw=true "7")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/7.png?raw=true "7")

Dentro de las utilidades de esta sublibrería se usa la función **getBlock**, que nos permite a traves de JSON RPC pedirle a un nodo de ethereum que traiga un bloque en especifico, dado el caso de que se quiera conocer el contenido de ese bloque se debe poner el identificador.    

[![9](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/9.png?raw=true "9")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/9.png?raw=true "9")

En el archivo index.js de Replit se agrega el siguiente código, donde La primera línea importa la biblioteca web3 en el código. La siguiente línea crea una instancia de la biblioteca y establece un endpoint Ethereum proporcionado por Infura, un proveedor de infraestructura para aplicaciones basadas en Ethereum.

Luego, el código muestra la información sobre la instancia de web3 en la consola. Finalmente, se usa el método web3.eth.getBlockNumber para obtener el número actual del bloque en la blockchain de Ethereum, y se muestra el resultado en la consola.

```javascript

// Se declara constante con mayuscula como clase
const Web3 = require('web3');

// La instacia en minuscula y el endpoint ethereum de Infura
const web3 = new Web3(`https://mainnet.infura.io/v3/54e90d1639ec4c4ba3fd8b064046c2da`);

console.log(web3);

// Retorna el número de bloque actual
web3.eth.getBlockNumber().then(number => {
  console.log(number);
})

```
Al correr el código en la terminal como output se mostrará las librearías que tiene web3.js y por ultimo bloque que se desarrolla en la red de ethereum:

[![10](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/10.png?raw=true "10")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/10.png?raw=true "10")

Etherscan es un explorador de bloques para la red de Ethereum. Un explorador de bloques es un motor de búsqueda que permite a los usuarios buscar, confirmar y validar fácilmente las transacciones que se han realizado en la red de Ethereum. La información de todo lo que sucede en la red de Ethereum es pública, por lo que Etherscan nos permite consultar mucha información sobre la red, como transacciones, smart contracts, gas fees y balances en cualquier billetera.

Etherscan web: [https://etherscan.io/](https://etherscan.io/ "https://etherscan.io/")

[![11](https://github.com/rozoandrescamilo/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/11.png?raw=true "11")](https://github.com/Web3-con-JavaScript-para-interactuar-con-un-nodo-de-ethereum/blob/main/img/11.png?raw=true "11")

Como se pudo observar es bastante facil utilizar Web3, simplemente pasadole una URL de un nodo de Ethereum y empezar a hacer querys desde la Web3 Javascript API. Esto es debido a que la constucción de métodos JSON RPC y conexiones se hacen internamente y es muy importante para extraer información de una aplicación descentralizada. 

## Retos para la Web3

- **Adopción y facilidad de uso**
La Web3 requiere una alta capacidad de comprensión, ya que muchos conceptos son abstractos y difíciles. Para muchas personas, estos no son fáciles de entender con la primera explicación.

Por eso, es necesario un esfuerzo educativo para que más personas entren al ecosistema y creen contenido. Así, todos y todas podremos aprender más sobre Web3, cripto, Blockchain, NFT, DeFi, DAOS, etc.

- **Concientización de la seguridad**
La Web3 implica una gran libertad, pero esto a la vez conlleva una gran responsabilidad.

Desafortunadamente, existen personas que toman ventaja de la falta de conocimiento y hacen estafas para obtener las frases semillas de las wallets y robar los cripto activos.

- **Nivel de usabilidad**
La complejidad de Web3 es alta y la abstracción es poca.

El reto consiste en generar nuevas aplicaciones e integraciones entre servicios para ofrecer a los usuarios una capa de aplicaciones más simple y segura que permitan participar de manera sencilla.

- **Nuevas legislaciones**
Los gobernantes también se encuentran en la transición hacia el mundo de la Web3. Ellos buscarán crear leyes y regulaciones para que el ecosistema sea compatible con la legislación actual.

Existen muchos aspectos por mejorar en la Web3 y seguro encontraremos muchos más adelante. Esto representa una oportunidad para nosotros.





