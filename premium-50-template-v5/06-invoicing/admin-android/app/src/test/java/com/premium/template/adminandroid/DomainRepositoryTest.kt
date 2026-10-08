package com.premium.template.adminandroid

import com.premium.template.adminandroid.core.database.DemoCache
import com.premium.template.adminandroid.data.repository.DomainRepositoryImpl
import kotlinx.coroutines.runBlocking
import org.junit.Assert.*
import org.junit.Test

class DomainRepositoryTest{@Test fun crudIsStateful()=runBlocking{val r=DomainRepositoryImpl(DemoCache());val before=r.list("module").size;val created=r.create("module");assertEquals(before+1,r.list("module").size);r.update(created.id,"Updated","active","module");assertEquals("Updated",r.list("module").first{it.id==created.id}.title);r.delete(created.id);assertEquals(before,r.list("module").size)}}
