package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun MembersScreen(onCreate:()->Unit){Card{Column{Text("Members");Text("Domain-specific members workflow");Button(onClick=onCreate){Text("Create")}}}}
