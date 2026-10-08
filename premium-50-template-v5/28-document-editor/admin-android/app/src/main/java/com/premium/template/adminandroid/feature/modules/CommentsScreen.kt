package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CommentsScreen(onCreate:()->Unit){Card{Column{Text("Comments");Text("Domain-specific comments workflow");Button(onClick=onCreate){Text("Create")}}}}
