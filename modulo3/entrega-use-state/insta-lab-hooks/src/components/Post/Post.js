import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [makeComment, setMakeComment] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);

  const onClickCurtida = () => {
    setLiked(!liked);

    liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const onClickComentario = () => {
    setMakeComment(!makeComment);
  };

  const enviarComentario = (comentario) => {
    const newCommentList = [...comments, comentario];

    setComments(newCommentList);

    setCommentCount(commentCount + 1);

    setMakeComment(false);
  }

  const commentsList = comments.map((comment) => {
    return <p key={comment}>{comment}</p>;
  });

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={!liked ? iconeCoracaoBranco : iconeCoracaoPreto}
          onClickIcone={onClickCurtida}
          valorContador={likeCount}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={commentCount}
        />
      </PostFooter>
      {makeComment ? <SecaoComentario
                        enviarComentario={enviarComentario}
                     /> 
      : <ul>{commentsList}</ul>}
    </PostContainer>
  )
}

export default Post