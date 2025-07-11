# APP
Instagram da ct junior

# RFs (Requisitos Funcionais)

    [ ] Deve ser possível se cadastrar.

    [ ] Deve ser possível se autenticar.

    [ ] Deve ser possível obter os posts de um usuário logado ([GET] /my-posts).

    [ ] Deve ser possível obter o feed de postagens de todos os usuários ([GET] /posts).

    [ ] Deve ser possível editar o próprio perfil (foto).

    [ ] Deve ser possível criar uma nova postagem.

    [ ] Deve ser possível editar uma postagem própria.

    [ ] Deve ser possível deletar uma postagem própria.

    [ ] Deve haver um mecanismo de Logout.

# RNs (Regras de Negócio)

    [ ] O usuário não deve poder se cadastrar com um username ou e-mail duplicado.

    [ ] O usuário só pode alterar a própria foto de perfil.

    [ ] O usuário só pode editar a descrição de um post que pertence a ele.

    [ ] O usuário só pode deletar um post que pertence a ele.

    [ ] O feed de postagens deve ser listado em ordem do mais recente para o mais antigo.

    [ ] A lista de posts do próprio usuário deve ser listada em ordem do mais recente para o mais antigo.

    [ ] O token de autenticação (JWT) deve expirar em 2 horas.

# RNFs (Requisitos Não-Funcionais)

    [ ] A senha do usuário precisa estar criptografada no banco de dados (usando Bcrypt).

    [ ] Os dados da aplicação precisam estar persistidos em um banco de dados relacional PostgreSQL.

    [ ] O usuário deve ser identificado por um JWT (JSON Web Token) nas rotas que exigem autenticação.

    [ ] O token JWT deve ser assinado com o ID do usuário, nunca com dados sensíveis.
