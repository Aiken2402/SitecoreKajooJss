/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Link, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Articles.module.css'

const Articles = (props) => {
  return (
    <Container
      className={` ${styles['articles']} ${styles[props.rootClassName]} `}
    >
      <Text tag="h2" text={props.fields.text} className={styles['h-2']} />
      <Container id="observer-grid-without-masonary" className={styles['div']}>
        <Container className={styles['div01']}>
          <Container className={styles['div02']}>
            <Link
              href={props.fields.href}
              onclick="dl_CTA('Understanding the behaviours and attitudes of today’s mortgage consumer',this);"
              text={props.fields.text1}
              className={styles['a']}
            >
              <Container className={styles['div03']}>
                <Image
                  src={props.fields.src}
                  alt={props.fields.alt}
                  className={styles['img']}
                />
              </Container>
              <Container className={styles['div04']}>
                <Text text={props.fields.text2} className={styles['span']} />
                <Text
                  tag="p"
                  text={props.fields.text3}
                  className={styles['p']}
                />
                <Text
                  tag="p"
                  text={props.fields.text4}
                  className={styles['p1']}
                />
              </Container>
            </Link>
          </Container>
        </Container>
        <Container className={styles['div05']}>
          <Container className={styles['div06']}>
            <Link
              href={props.fields.href1}
              onclick="dl_CTA('Housing Research Scholarship Program renewed and expanded',this);"
              text={props.fields.text5}
              className={styles['a1']}
            >
              <Container className={styles['div07']}>
                <Image
                  src={props.fields.src1}
                  alt={props.fields.alt1}
                  className={styles['img1']}
                />
              </Container>
              <Container className={styles['div08']}>
                <Text text={props.fields.text6} className={styles['span1']} />
                <Text
                  tag="p"
                  text={props.fields.text7}
                  className={styles['p2']}
                />
                <Text
                  tag="p"
                  text={props.fields.text8}
                  className={styles['p3']}
                />
              </Container>
            </Link>
          </Container>
        </Container>
        <Container className={styles['div09']}>
          <Container className={styles['div10']}>
            <Link
              href={props.fields.href2}
              onclick="dl_CTA('Explore CMHC%39s 2023 Annual Report',this);"
              text={props.fields.text9}
              className={styles['a2']}
            >
              <Container className={styles['div11']}>
                <Image
                  src={props.fields.src2}
                  alt={props.fields.alt2}
                  className={styles['img2']}
                />
              </Container>
              <Container className={styles['div12']}>
                <Text text={props.fields.text10} className={styles['span2']} />
                <Text
                  tag="p"
                  text={props.fields.text11}
                  className={styles['p4']}
                />
                <Text
                  tag="p"
                  text={props.fields.text12}
                  className={styles['p5']}
                />
              </Container>
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Articles.defaultProps = {
  fields: {
    text: 'Related Articles',
    href: '/en/blog/2024/understanding-behaviours-attitudes-todays-mortgage-consumer',
    text1: '',
    src: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240606-understanding-behaviours-attitudes-todays-mortgage-consumer.jpg?rev=9595a892-f469-40db-9f7f-44f9dc50a9da',
    alt: '',
    text2: 'June 6, 2024',
    text3:
      'Understanding the behaviours and attitudes of today’s mortgage consumer',
    text4: 'Explore essential insights from our 2024 Mortgage Consumer Survey.',
    href1:
      '/en/blog/2024/housing-research-scholarship-program-renewed-expanded',
    text5: '',
    src1: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240605-housing-research-scholarship-program-renewed-expanded/tile.jpg?rev=c2b9c52f-c67a-46dc-b4fd-aece1288f284',
    alt1: '',
    text6: 'June 5, 2024',
    text7: 'Housing Research Scholarship Program renewed and expanded',
    text8:
      'Fellowships for post-doctoral housing research, now also open to Master’s and PhD students.',
    href2:
      '/en/blog/2024/reflecting-on-year-challenges-progress-canada-housing',
    text9: '',
    src2: 'https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240506-reflecting-on-year-challenges-progress-canada-housing/tile.jpg?rev=9f608c5e-bfa9-432b-891d-284b151fd7bd',
    alt2: '',
    text10: 'May 6, 2024',
    text11: "Explore CMHC's 2023 Annual Report",
    text12: 'Learn more about our challenges and successes in 2023.',
  },
  rootClassName: '',
  rendering: {},
}

Articles.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(Articles)
