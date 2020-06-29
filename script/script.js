/*
Необходимо реализовать класс, который описывает статью, у класса должны быть реализованы свойства:
заголовок
текст
кол-во лайков
(заголовок и текст должны быть с геттерами и сеттерами)

должен быть реализован метод:
добавить лайк посту
*/

class Article {
    constructor(title, text) {
        this._title = title;
        this._text = text;
        this.like = 0;
    }
    get title(){
        return this._title;
    }
    set title(t){
            this._title = t;
    }
    get text(){
        return this._text;
    }
    set text(t){
            this._text = t;
    }
    addLike(){
        this.like++;
        console.log('Вай, какая хорошая статья!)')
    }
    removeLike(){
        if (this.like >0){
            this.like--;
            console.log('Фу, фу, фу!')
        }
    }

}
//let myArticle = new Article ('Новая статья','Некий текст в статье' )

let rootElem = document.querySelector('.root');

for (let article of data){
    let myArticle = new Article (article.title, article.text)
    let articleElem = document.createElement('div');
    let titleElem = document.createElement('h2');
    let textElem = document.createElement('p');
    let likeElem = document.createElement('div');
    let likeElemValue = document.createElement('div');
    let likeElemAdd = document.createElement('div');
    let likeElemRemove = document.createElement('div');
    let editArticle = document.createElement('div');

    articleElem.classList.add('articleElem');
    likeElem.classList.add('likeElem');

    titleElem.innerText = myArticle.title;
    textElem.innerText = myArticle.text;
    likeElemValue.innerText = `${String.fromCharCode(10084)}  ${myArticle.like} `;
    likeElemAdd.innerText = `${String.fromCharCode(9757)}`;
    likeElemRemove.innerText = `${String.fromCharCode(9759)}`;
    editArticle.innerText = `${String.fromCharCode(10002)}Редактировать статью`;

    likeElemAdd.addEventListener('click', function (){
        myArticle.addLike();
        likeElemValue.innerText = `${String.fromCharCode(10084)}  ${myArticle.like} `;
    });
    likeElemRemove.addEventListener('click', function (){
        myArticle.removeLike();
        likeElemValue.innerText = `${String.fromCharCode(10084)}  ${myArticle.like} `;
    });
    editArticle.addEventListener('click', function (){
        editArticle.style.display = 'none';
        let titleInput = document.createElement('input');
        let textInput = document.createElement('textarea');
        let btnInput = document.createElement('button');

        titleInput.placeholder = 'Изменить заголовок';
        textInput.placeholder = 'Изменить текст статьи';
        btnInput.innerText = 'Внести изменения';

        articleElem.appendChild(titleInput);
        articleElem.appendChild(textInput);
        articleElem.appendChild(btnInput);
        console.log('Отредактируем?')

        btnInput.addEventListener('click', function () {
            if (titleInput.value){
                myArticle.title = titleInput.value;
                titleElem.innerText = myArticle.title;
            }
            if (textInput.value){
                myArticle.text = textInput.value;
                textElem.innerText = myArticle.text;
            }
            titleInput.remove();
            textInput.remove();
            btnInput.remove();
            editArticle.style.display = 'block';
        })
    });

    likeElem.appendChild(likeElemValue);
    likeElem.appendChild(likeElemAdd);
    likeElem.appendChild(likeElemRemove);
    likeElem.appendChild(editArticle);
    articleElem.appendChild(titleElem);
    articleElem.appendChild(textElem);
    articleElem.appendChild(likeElem);
    rootElem.appendChild(articleElem);
}
