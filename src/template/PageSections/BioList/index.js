import React from "react";
import { graphql } from "gatsby";
import { Container, Title, Bios, Left, Right } from "./styles";
import BioCard from "../../../components/BioCard";
const BioList = ({ section }) => {
  return (
    <Container>
      <Title> {section.elements.title.value}</Title>
      <Bios>
        <Left>
          {section.elements.left_column_cards.value.map((item, index) => {
            return <BioCard index={index} data={item} />;
          })}
        </Left>
        <Right>
          {section.elements.right_column_cards.value.map((item, index) => {
            return <BioCard index={index} data={item} />;
          })}
        </Right>
      </Bios>
    </Container>
  );
};

export default BioList;
export const BioListFragment = graphql`
  fragment BioListFragment on kontent_item_section___bio_list {
    id
    system {
      id
      type
      codename
    }
    elements {
      title {
        value
      }
      left_column_cards {
        value {
          ... on kontent_item_bio_card {
            id
            elements {
              full_name {
                value
              }
              headshot {
                value {
                  height
                  url
                  width
                  description
                }
              }
              position {
                value
              }
              biography {
                value
              }
            }
          }
        }
      }
      right_column_cards {
        value {
          ... on kontent_item_bio_card {
            id
            elements {
              full_name {
                value
              }
              headshot {
                value {
                  height
                  url
                  width
                  description
                }
              }
              position {
                value
              }
              biography {
                value
              }
            }
          }
        }
      }
    }
  }
`;
