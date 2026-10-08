package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BookmarksScreen(onCreate:()->Unit){Card{Column{Text("Bookmarks");Text("Domain-specific bookmarks workflow");Button(onClick=onCreate){Text("Create")}}}}
