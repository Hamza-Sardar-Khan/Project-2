import CMS from "netlify-cms-app"

CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "url",
      label: "Youtube video URL",
      widget: "string",
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    }
  },
  toBlock: function (obj) {
    return "youtubeCustomCMSCheck: " + obj.url + ""
  },
  toPreview: function (obj) {
    return obj.url
  },
})



CMS.registerEditorComponent({
  id: "getMatadataanchor",
  label: "AddLinks",
  widget: "object",
  fields: [
    {
      name: "addlist",
      label: "AddList",
      widget: "list",
      fields: [
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
        },
        {
          name: "text",
          label: "Text",
          widget: "string",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
      ],
    },
  ],
  pattern: /^`getMatadataanchor:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      addlist: match[1],
    }
  },
  toBlock: function (obj) {
    return "metaanchorlinktag: " + JSON.stringify(obj.addlist) + " "
  },
  toPreview: function (obj) {
    return obj.addlist
  },
})
