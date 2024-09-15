import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentCategoryState } from "../Atom";

export default function Nav() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);

    // 카테고리 목록을 서버에서 불러오는 함수
    const getCategories = async () => {
        await axios
            .get("http://localhost:3001/categories")
            .then((res) => {
                setCategories(res.data);
                console.log("서버에서 가져온 카테고리 목록:", res.data); // 카테고리 목록 로그
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // 페이지가 처음 렌더링될 때 카테고리를 불러옵니다.
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <Wrapper>
            {categories.map((category, i) => (
                <Category
                    key={category.id}
                    isActive={currentCategory === category.id}
                    onClick={() => {
                        setCurrentCategory(category.id); // 카테고리 ID를 숫자로 설정
                        console.log("선택된 카테고리 ID:", category.id); // 선택된 카테고리 로그
                    }}
                >
                    {category.title}
                </Category>
            ))}
        </Wrapper>
    );
}

// Styled-components를 사용하여 조건부 스타일 적용
const Wrapper = styled.nav`
    background-color: #030303;
    display: flex;
    justify-content: space-evenly;
    width: 85vw;
    position: fixed;
    height: 100px;
    border-bottom: 2px solid #aea77f;
    color: #aea77f;
`;

// 카테고리 컴포넌트에 조건부로 폰트 크기 적용
const Category = styled.div`
    font-size: ${(props) => (props.isActive ? "30px" : "20px")}; // 활성화된 카테고리일 경우 폰트 크기 30px
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
