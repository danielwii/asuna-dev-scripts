import {
  AbstractCategoryEntity,
  AbstractTimeBasedBaseEntity,
  ColumnTypeHelper,
  EntityMetaInfo,
  InjectTenant,
  MetaInfo,
  Publishable,
} from 'asuna-node-server';
import { Column, Entity} from 'typeorm';

@EntityMetaInfo({ name: 'articles', displayName: '资讯' })
@Entity('www__t_articles')
export class Article extends Publishable(InjectTenant(AbstractTimeBasedBaseEntity)) {
  constructor() {
    super('c');
  }

  @MetaInfo({ name: '新闻标题' })
  @Column({ nullable: false, name: 'title' })
  title: string;

  // --------------------------------------------------------------
  // Optional
  // --------------------------------------------------------------

  @MetaInfo({ name: '资讯内容', type: 'RichText' })
  @Column(ColumnTypeHelper.text(), { nullable: true, name: 'content' })
  content: string;

  // --------------------------------------------------------------
  // Status
  // --------------------------------------------------------------


  // --------------------------------------------------------------
  // Relations
  // --------------------------------------------------------------

}
