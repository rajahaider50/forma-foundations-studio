package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MembersScreen(onCreate:()->Unit){Card{Column{Text("Members");Text("Domain-specific members workflow");Button(onClick=onCreate){Text("Create")}}}}
