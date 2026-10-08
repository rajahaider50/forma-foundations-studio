package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun JobsScreen(onCreate:()->Unit){Card{Column{Text("Jobs");Text("Domain-specific jobs workflow");Button(onClick=onCreate){Text("Create")}}}}
