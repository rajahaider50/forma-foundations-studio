package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BookmarksScreen(onCreate:()->Unit){Card{Column{Text("Bookmarks");Text("Domain-specific bookmarks workflow");Button(onClick=onCreate){Text("Create")}}}}
