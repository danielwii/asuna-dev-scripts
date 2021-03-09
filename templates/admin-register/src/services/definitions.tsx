import { Asuna, AsunaDefinitions, columnCreator, columnHelper, commonColumns, createLogger } from 'asuna-admin';
import * as fp from 'lodash/fp';
import * as React from 'react';
import { Definitions } from '../adapters';
import { KvPair, TypeSchema as SysTypeSchema } from '../adapters/type-schema';

import { Sort, TypeSchema } from './type-schema';

const logger = createLogger('service:definitions');

const modelOpts: { [key in keyof (TypeSchema & SysTypeSchema)]: Asuna.Schema.ModelOpt<any> } = {
  sorts: {},
  ...Definitions.defaultModelOpts,
};

const definitions = new AsunaDefinitions<typeof modelOpts>();
definitions.addModelOpts(modelOpts);

// --------------------------------------------------------------
// Content
// --------------------------------------------------------------

definitions.setupSideMenus('content', '内容模块', [
  { key: 'sorts', title: '序列管理', linkTo: 'content::index' },
  { key: 'kv__pairs', title: 'KV 管理', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<Sort>('sorts', {
  columns: (model) => ({
    name: commonColumns.fpName(model),
    type: commonColumns.fpType(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});

definitions.setupTableColumns<KvPair>('kv__pairs', {
  columns: (model) => ({
    name: commonColumns.fpName(model),
    type: commonColumns.fpType(model),
    collection: columnCreator({ model, title: 'Collection' }, { searchType: 'like' }),
    key: columnCreator({ model, title: 'Key' }, { searchType: 'like' }),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// Slides
// --------------------------------------------------------------

definitions.setupSideMenus('slides', '幻灯片管理', [
  { key: 'slides', title: '幻灯片管理', linkTo: 'content::index' },
  { key: 'slide_categories', title: '幻灯片分类', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<Slide>('slides', {
  enablePublished: true,
  columns: (model) => ({
    ordinal: commonColumns.fpOrdinal(model),
    name: commonColumns.fpName(model),
    image: (key) => columnHelper.generateImage(key, '图片'),
    updatedBy: commonColumns.fpUpdatedBy(model),
    category: commonColumns.fpCategory(model),
  }),
});

definitions.setupTableColumns<Category>('slide_categories', {
  enablePublished: true,
  columns: (model) => ({
    name: commonColumns.fpName(model),
    description: commonColumns.fpDescription(model),
    updatedBy: commonColumns.fpUpdatedBy(model),

    //TODO category
  }),
});
*/

// --------------------------------------------------------------
// Links
// --------------------------------------------------------------

/*
definitions.setupSideMenus('links', '友情链接', [{ key: 'links', title: '友情链接', linkTo: 'content::index' }]);

definitions.setupTableColumns<Link>('links', {
  enablePublished: true,
  columns: (model) => ({
    ordinal: commonColumns.fpOrdinal(model),
    name: commonColumns.fpName(model),
    link: (key) => columnHelper.generateLink(key, 'URL'),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// Abouts
// --------------------------------------------------------------

definitions.setupSideMenus('abouts', '关于我们', [
  { key: 'recruitment_jobs', title: '加入我们', linkTo: 'content::index' },
  // { key: 'abouts', title: '关于我们', linkTo: 'content::index' },
  // { key: 'about_categories', title: '关于我们分类', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<RecruitmentJob>('recruitment_jobs', {
  enablePublished: true,
  columns: (model) => ({
    city: columnCreator({ model, title: '招聘城市' }),
    job: columnCreator({ model, title: '招聘岗位' }),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// Form
// --------------------------------------------------------------

definitions.setupSideMenus('forms', '表单管理', [
  { key: 'form_data', title: '表单', linkTo: 'content::index' },
  { key: 'utm_sources', title: '渠道', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<FormDatum>('form_data', {
  columns: (model) => ({
    name: commonColumns.fpName(model),
    studentName: columnCreator({ model, title: '姓名' }),
    city: columnCreator({ model, title: '所在城市' }),
    sex: columnCreator({ model, title: '性别' }),
    age: columnCreator({ model, title: '年龄' }),
    wechat: columnCreator({ model, title: '微信' }),
    phone: columnCreator({ model, title: '电话' }),
    question: columnCreator({ model, title: '问题' }),
    source: columnHelper.fpGenerateRelation('source', '渠道', { transformer: fp.get('displayName') }),
  }),
});

definitions.setupTableColumns<UtmSource>('utm_sources', {
  columns: (model) => ({
    name: commonColumns.fpName(model),
    displayName: columnCreator({ model, title: '渠道' }),
  }),
});
*/

// --------------------------------------------------------------
// Articles
// --------------------------------------------------------------

definitions.setupSideMenus('news', '资讯管理', [
  { key: 'articles', title: '资讯列表', linkTo: 'content::index' },
  { key: 'article_categories', title: '资讯分类', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<Article>('articles', {
  enablePublished: true,
  columns: (model) => ({
    title: columnCreator({ model, title: '标题' }, { searchType: 'like' }),
    updatedBy: commonColumns.fpUpdatedBy(model),
    category: commonColumns.fpCategory(model),
  }),
});

definitions.setupTableColumns<Category>('article_categories', {
  enablePublished: true,
  columns: (model) => ({
    name: commonColumns.fpName(model),
    description: commonColumns.fpDescription(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// Faqs
// --------------------------------------------------------------

definitions.setupSideMenus('faqs', '常见问题管理', [
  { key: 'faqs', title: 'FAQ 列表', linkTo: 'content::index' },
  { key: 'faq_categories', title: 'FAQ 分类', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<FAQ>('faqs', {
  enablePublished: true,
  columns: (model) => ({
    ordinal: commonColumns.fpOrdinal(model),
    problem: columnCreator({ model, title: '问题' }),
    category: commonColumns.fpCategory(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
definitions.setupTableColumns<Category>('faq_categories', {
  enablePublished: true,
  columns: (model) => ({
    name: commonColumns.fpName(model),
    description: commonColumns.fpDescription(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// Videos
// --------------------------------------------------------------

definitions.setupSideMenus('videos', '视频管理', [
  { key: 'videos', title: '视频管理', linkTo: 'content::index' },
  { key: 'video_categories', title: '视频分类', linkTo: 'content::index' },
]);

/*
definitions.setupTableColumns<Video>('videos', {
  enablePublished: true,
  columns: (model) => ({
    ordinal: commonColumns.fpOrdinal(model),
    name: commonColumns.fpName(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
    category: commonColumns.fpCategory(model),
  }),
});

definitions.setupTableColumns<Category>('video_categories', {
  enablePublished: true,
  columns: (model) => ({
    name: commonColumns.fpName(model),
    description: commonColumns.fpDescription(model),
    updatedBy: commonColumns.fpUpdatedBy(model),
  }),
});
*/

// --------------------------------------------------------------
// System Modules
// --------------------------------------------------------------

Definitions.setupDefaultSysMenus({
  definitions,
  enablePayment: true,
});

// --------------------------------------------------------------
// Admin & Auth
// --------------------------------------------------------------

Definitions.setupDefaultAdminMenus({ definitions });
Definitions.setupDefaultAuthMenus({ definitions });

// --------------------------------------------------------------
// add others
// --------------------------------------------------------------

definitions.addModelColumns({ ...Definitions.defaultModelColumns });

definitions.addAssociations({
  articles: { name: 'title', fields: ['id', 'title'] },
  faqs: { name: 'problem', fields: ['id', 'problem'] },
  ...Definitions.defaultAssociations,
});

export { definitions };
