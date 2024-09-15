import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { cardsState, selectedRecipeState, currentCategoryState } from "../Atom";

export default function Aside() {
    const setSelectedRecipe = useRecoilValue(selectedRecipeState);
    const [cards, setCards] = useRecoilState(cardsState); // Recoil 상태로 관리
    const currentCategory = useRecoilValue(currentCategoryState); // 현재 선택된 카테고리
    const [updatedCards, setUpdatedCards] = useState([]); // 필터링된 레시피를 저장할 상태

    // 서버에서 레시피 데이터를 가져오는 함수
    const fetchCards = async () => {
        try {
            const response = await axios.get("http://localhost:3001/recipes");
            setCards(response.data); // Recoil 상태 업데이트
            console.log("서버에서 가져온 레시피:", response.data); // 레시피 데이터 로그
        } catch (error) {
            console.log("Error fetching cards:", error);
        }
    };

    useEffect(() => {
        const filteredCards = cards.filter((card) => card.category == currentCategory);
        const sortedCards = [...filteredCards].sort((a, b) => b.star - a.star);
        setUpdatedCards(sortedCards); // 필터링된 레시피를 업데이트
    }, [cards, currentCategory]); // cards와 currentCategory가 변경될 때 실행

    // 별점 업데이트 시 바로 랭킹 순서가 업데이트되도록 상태 갱신
    useEffect(() => {
        fetchCards(); // 페이지 첫 로드 시 레시피 데이터 불러오기
    }, []);

    return (
        <Wrapper>
            <Title>랭킹</Title>
            <Rank>
                {updatedCards.length > 0 ? (
                    updatedCards.map((card, i) => (
                        <div
                            key={card.id}
                            onClick={() => {
                                setSelectedRecipe(card.id); // 레시피 선택 시 상태 업데이트
                            }}
                        >
                            {i + 1}. {card.title}
                        </div>
                    ))
                ) : (
                    <div>이 카테고리에 레시피가 없습니다.</div>
                )}
            </Rank>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    width: 15vw;
    background-color: #030303;
    color: #aea77f;
    height: 100vh;
    border-right: 1px solid #333;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Rank = styled.div`
    width: 100%;
    div {
        font-size: 22px;
        margin: 20px;
        cursor: pointer;
    }
`;

const Title = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`;
