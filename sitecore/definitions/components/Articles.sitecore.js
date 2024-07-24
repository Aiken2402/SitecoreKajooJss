import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'Articles',
    displayName: 'Articles',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Related Articles',
      },
      {
        name: 'href',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='/en/blog/2024/understanding-behaviours-attitudes-todays-mortgage-consumer' anchor='' target=''/>",
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240606-understanding-behaviours-attitudes-todays-mortgage-consumer.jpg?rev=9595a892-f469-40db-9f7f-44f9dc50a9da"}',
      },
      {
        name: 'alt',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'June 6, 2024',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Understanding the behaviours and attitudes of today’s mortgage consumer',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Explore essential insights from our 2024 Mortgage Consumer Survey.',
      },
      {
        name: 'href1',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='/en/blog/2024/housing-research-scholarship-program-renewed-expanded' anchor='' target=''/>",
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src1',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240605-housing-research-scholarship-program-renewed-expanded/tile.jpg?rev=c2b9c52f-c67a-46dc-b4fd-aece1288f284"}',
      },
      {
        name: 'alt1',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'June 5, 2024',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Housing Research Scholarship Program renewed and expanded',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Fellowships for post-doctoral housing research, now also open to Master’s and PhD students.',
      },
      {
        name: 'href2',
        type: CommonFieldTypes.GeneralLink,
        standardValue:
          "<link text='' linktype='external' url='/en/blog/2024/reflecting-on-year-challenges-progress-canada-housing' anchor='' target=''/>",
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'src2',
        type: CommonFieldTypes.Image,
        standardValue:
          '{"image-do":"https://assets.cmhc-schl.gc.ca/sites/cmhc/blog/2024/20240506-reflecting-on-year-challenges-progress-canada-housing/tile.jpg?rev=9f608c5e-bfa9-432b-891d-284b151fd7bd"}',
      },
      {
        name: 'alt2',
        type: CommonFieldTypes.SingleLineText,
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'May 6, 2024',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: "Explore CMHC's 2023 Annual Report",
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Learn more about our challenges and successes in 2023.',
      },
    ],
  })
}
